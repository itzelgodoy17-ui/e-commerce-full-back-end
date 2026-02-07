import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './users.repository';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    create(createUserDto: CreateUserDto): {
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
    };
    findAll(page: number, limit: number): import("./entities/user.entity").User[];
    findOne(id: number): void;
    update(id: number, updateUserDto: UpdateUserDto): import("./entities/user.entity").User | "User not found";
    remove(id: number): import("./entities/user.entity").User[];
}
