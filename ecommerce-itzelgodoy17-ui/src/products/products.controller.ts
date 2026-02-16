import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe, Put, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(@Query('page') page: number = 1, @Query('limit') limit: number = 5) {
    return this.productsService.getProducts(page, limit);
  }

  @Get(':id')
  getProduct(@Param('id', ParseUUIDPipe) id: string) {
  return this.productsService.getProductById(id); 
  }

  @Post('seeder')
  seedProducts() {
    return this.productsService.seeder();
  }

  @Put(':id')
  @Roles('admin') 
  @UseGuards(AuthGuard, RolesGuard) 
  update(@Param('id') id: string) {
    return this.productsService.update(id);
  }
}
