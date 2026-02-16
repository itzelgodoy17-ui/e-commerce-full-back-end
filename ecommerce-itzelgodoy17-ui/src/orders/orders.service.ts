import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from './entities/order.entity';
import { OrderDetails } from './entities/orderDetails.entity';
import { Users } from 'src/users/entities/user.entity';
import { Products } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Users) private readonly usersRepository: Repository<Users>,
    @InjectRepository(Orders) private readonly ordersRepository: Repository<Orders>,
    @InjectRepository(Products) private readonly productsRepository: Repository<Products>,
    @InjectRepository(OrderDetails) private readonly orderDetailsRepository: Repository<OrderDetails>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const { userId, products } = createOrderDto;

    const user = await this.usersRepository.findOneBy({ id: userId });
    if (!user) throw new NotFoundException('El usuario no se ha encontrado');

    const newOrder = await this.ordersRepository.save({
      user: user,
      date: new Date(),
    });

    let total = 0;

    const productsArray = await Promise.all(
      products.map(async (element) => {
        const product = await this.productsRepository.findOneBy({ id: element.id });
        
        if (!product) {
          throw new NotFoundException(`Producto con ID ${element.id} no existe`);
        }

        if (product.stock <= 0) {
          throw new BadRequestException(`El producto ${product.name} no tiene stock`);
        }

        total += Number(product.price);
        product.stock -= 1;
        await this.productsRepository.save(product);
        
        return product;
      })
    );

    const orderDetail = new OrderDetails();
    orderDetail.price = Number(total.toFixed(2));
    orderDetail.products = productsArray;
    orderDetail.order = newOrder;
    await this.orderDetailsRepository.save(orderDetail);

    return await this.ordersRepository.findOne({
      where: { id: newOrder.id },
      relations: { orderDetails: true },
    });
  }

  async getOrder(id: string) {
    const order = await this.ordersRepository.findOne({
      where: { id },
      relations: { orderDetails: { products: true } },
    });

    if (!order) throw new NotFoundException(`La orden con ID ${id} no existe`);
    return order;
  }
}
