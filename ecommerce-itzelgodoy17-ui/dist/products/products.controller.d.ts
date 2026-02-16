import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(page?: number, limit?: number): Promise<import("./entities/product.entity").Products[]>;
    getProduct(id: string): Promise<import("./entities/product.entity").Products>;
    seedProducts(): Promise<string>;
    update(id: string): Promise<string>;
}
