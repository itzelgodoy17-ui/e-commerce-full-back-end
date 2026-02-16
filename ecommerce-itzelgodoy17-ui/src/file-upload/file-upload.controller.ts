import { Controller, FileTypeValidator, MaxFileSizeValidator, Param, ParseFilePipe, ParseUUIDPipe, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Put(":productId")
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor("file"))
  uploadImage(@UploadedFile(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({
          maxSize: 200000,
          message: "Files must be mas 200 Kb",
        }),
        new FileTypeValidator({
          fileType: /(jpg|jpeg|png|webp)$/,
        }),
      ],
    }),
  ) file: Express.Multer.File, @Param("productId", ParseUUIDPipe) productId: string,) {
    return this.fileUploadService.uploadImage(file, productId)
  }
}
