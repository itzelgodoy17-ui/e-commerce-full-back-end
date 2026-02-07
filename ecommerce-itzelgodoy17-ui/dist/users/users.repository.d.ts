import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UserRepository {
    users: User[];
    findAll(): User[];
    findOne(id: number): void;
    save(user: CreateUserDto): {
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
    };
    update(id: number, data: UpdateUserDto): User | "User not found";
    delete(id: number): User[];
}
