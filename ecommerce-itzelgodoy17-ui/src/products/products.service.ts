import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Categories } from 'src/categories/entities/category.entity';
import data from '../data.json';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products) private productsRepository: Repository<Products>,
    @InjectRepository(Categories) private categoriesRepository: Repository<Categories>,
  ) {}

  async getProducts(page: number, limit: number) {
    return await this.productsRepository.find({
      relations: { category: true },
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async seeder() {
    const categories = await this.categoriesRepository.find();

    for (const item of data as any[]) {
      const category = categories.find((cat) => cat.name === item.category);

      const newProduct = new Products();
      newProduct.name = item.name;
      newProduct.description = item.description;
      newProduct.price = item.price;
      newProduct.stock = item.stock;
      newProduct.imgUrl = item.imgUrl;
      newProduct.category = category!;

      await this.productsRepository.upsert(newProduct, ['name']);
    }
    return 'Products Added';
  }

  async getProductById(id: string) {
    const product = await this.productsRepository.findOneBy({ id });
    if (!product) throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    return product;
  }

  async update(id: string) {
    return `Producto con id ${id} actualizado (Lógica pendiente)`;
  }
}
