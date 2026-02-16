import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import data from '../data.json';
import { Categories } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Categories) private readonly categoriesRepository: Repository<Categories>) {}

  async seeder() { 
    const categoryNames: Set<string> = new Set((data as any).map((product: any) => product.category));

    const categoriesArray = Array.from(categoryNames);

    const categories = categoriesArray.map((string) => ({
      name: string,
    }));

    await this.categoriesRepository.upsert(categories, ['name']);

    return 'Categories Added';
  }
}
