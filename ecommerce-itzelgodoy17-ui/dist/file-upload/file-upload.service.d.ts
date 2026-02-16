import { FileUploadRepository } from './file-upload.repository';
import { Products } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
export declare class FileUploadService {
    private readonly filesUploadRepository;
    private readonly productsRepository;
    constructor(filesUploadRepository: FileUploadRepository, productsRepository: Repository<Products>);
    uploadImage(file: Express.Multer.File, productId: string): Promise<Products | null>;
}
