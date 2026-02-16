import { AuthService } from './auth.service';
import { CreateUserDto, LoginDto } from 'src/users/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(user: CreateUserDto): Promise<any>;
    signIn(credentials: LoginDto): Promise<{
        message: string;
        token: string;
    }>;
}
