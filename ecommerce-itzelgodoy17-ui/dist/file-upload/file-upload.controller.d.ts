import { FileUploadService } from './file-upload.service';
export declare class FileUploadController {
    private readonly fileUploadService;
    constructor(fileUploadService: FileUploadService);
    uploadImage(file: Express.Multer.File, productId: string): Promise<import("../products/entities/product.entity").Products | null>;
}
