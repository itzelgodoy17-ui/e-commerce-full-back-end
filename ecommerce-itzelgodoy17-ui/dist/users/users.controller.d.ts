import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): string;
    getUser(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        order: import("../orders/entities/order.entity").Orders[];
    }>;
    updateUser(id: string, user: any): string;
    deleteUser(id: string): string;
}
