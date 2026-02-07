import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): {
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
    };
    findAll(page: string, limit: string): import("./entities/user.entity").User[];
    findOne(id: string): void;
    update(id: string, updateUserDto: UpdateUserDto): import("./entities/user.entity").User | "User not found";
    remove(id: string): import("./entities/user.entity").User[];
}
