import { Orders } from './entities/order.entity';
import { OrderDetails } from './entities/orderDetails.entity';
import { Users } from 'src/users/entities/user.entity';
import { Products } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersService {
    private readonly usersRepository;
    private readonly ordersRepository;
    private readonly productsRepository;
    private readonly orderDetailsRepository;
    constructor(usersRepository: Repository<Users>, ordersRepository: Repository<Orders>, productsRepository: Repository<Products>, orderDetailsRepository: Repository<OrderDetails>);
    create(createOrderDto: CreateOrderDto): Promise<Orders | null>;
    getOrder(id: string): Promise<Orders>;
}
