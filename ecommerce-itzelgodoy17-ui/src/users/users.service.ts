import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly usersRepository: Repository<Users>
  ) {}

  findAll() {
    return "Mensaje protegido. Token funcionando";
  }


   update(id: string, user: any) {
     return `Usuario ${id} actualizado`;
   }
   
   remove(id: string) {
     return `Usuario ${id} eliminado`;
   }
   
   async getUserById(id: string) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) throw new NotFoundException();
  
    const { password, isAdmin, ...userNoSensitiveData } = user;
    return userNoSensitiveData;
    }   
}
