"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("./entities/order.entity");
const orderDetails_entity_1 = require("./entities/orderDetails.entity");
const user_entity_1 = require("../users/entities/user.entity");
const product_entity_1 = require("../products/entities/product.entity");
const typeorm_2 = require("typeorm");
let OrdersService = class OrdersService {
    usersRepository;
    ordersRepository;
    productsRepository;
    orderDetailsRepository;
    constructor(usersRepository, ordersRepository, productsRepository, orderDetailsRepository) {
        this.usersRepository = usersRepository;
        this.ordersRepository = ordersRepository;
        this.productsRepository = productsRepository;
        this.orderDetailsRepository = orderDetailsRepository;
    }
    async create(createOrderDto) {
        const { userId, products } = createOrderDto;
        const user = await this.usersRepository.findOneBy({ id: userId });
        if (!user)
            throw new common_1.NotFoundException('El usuario no se ha encontrado');
        const newOrder = await this.ordersRepository.save({
            user: user,
            date: new Date(),
        });
        let total = 0;
        const productsArray = await Promise.all(products.map(async (element) => {
            const product = await this.productsRepository.findOneBy({ id: element.id });
            if (!product) {
                throw new common_1.NotFoundException(`Producto con ID ${element.id} no existe`);
            }
            if (product.stock <= 0) {
                throw new common_1.BadRequestException(`El producto ${product.name} no tiene stock`);
            }
            total += Number(product.price);
            product.stock -= 1;
            await this.productsRepository.save(product);
            return product;
        }));
        const orderDetail = new orderDetails_entity_1.OrderDetails();
        orderDetail.price = Number(total.toFixed(2));
        orderDetail.products = productsArray;
        orderDetail.order = newOrder;
        await this.orderDetailsRepository.save(orderDetail);
        return await this.ordersRepository.findOne({
            where: { id: newOrder.id },
            relations: { orderDetails: true },
        });
    }
    async getOrder(id) {
        const order = await this.ordersRepository.findOne({
            where: { id },
            relations: { orderDetails: { products: true } },
        });
        if (!order)
            throw new common_1.NotFoundException(`La orden con ID ${id} no existe`);
        return order;
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.Users)),
    __param(1, (0, typeorm_1.InjectRepository)(order_entity_1.Orders)),
    __param(2, (0, typeorm_1.InjectRepository)(product_entity_1.Products)),
    __param(3, (0, typeorm_1.InjectRepository)(orderDetails_entity_1.OrderDetails)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrdersService);
//# sourceMappingURL=orders.service.js.map