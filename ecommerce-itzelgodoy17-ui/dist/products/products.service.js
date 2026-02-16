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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("../categories/entities/category.entity");
const data_json_1 = __importDefault(require("../data.json"));
let ProductsService = class ProductsService {
    productsRepository;
    categoriesRepository;
    constructor(productsRepository, categoriesRepository) {
        this.productsRepository = productsRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async getProducts(page, limit) {
        return await this.productsRepository.find({
            relations: { category: true },
            skip: (page - 1) * limit,
            take: limit,
        });
    }
    async seeder() {
        const categories = await this.categoriesRepository.find();
        for (const item of data_json_1.default) {
            const category = categories.find((cat) => cat.name === item.category);
            const newProduct = new product_entity_1.Products();
            newProduct.name = item.name;
            newProduct.description = item.description;
            newProduct.price = item.price;
            newProduct.stock = item.stock;
            newProduct.imgUrl = item.imgUrl;
            newProduct.category = category;
            await this.productsRepository.upsert(newProduct, ['name']);
        }
        return 'Products Added';
    }
    async getProductById(id) {
        const product = await this.productsRepository.findOneBy({ id });
        if (!product)
            throw new common_1.NotFoundException(`Producto con ID ${id} no encontrado`);
        return product;
    }
    async update(id) {
        return `Producto con id ${id} actualizado (Lógica pendiente)`;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Products)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Categories)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map