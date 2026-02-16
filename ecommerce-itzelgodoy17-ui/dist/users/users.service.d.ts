import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<Users>);
    findAll(): string;
    update(id: string, user: any): string;
    remove(id: string): string;
    getUserById(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        order: import("../orders/entities/order.entity").Orders[];
    }>;
}
