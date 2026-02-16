import { Repository } from 'typeorm';
import { Users } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersRepository;
    private readonly jwtService;
    constructor(usersRepository: Repository<Users>, jwtService: JwtService);
    create(createUserDto: any): Promise<any>;
    signIn(email: string, pass: string): Promise<{
        message: string;
        token: string;
    }>;
}
