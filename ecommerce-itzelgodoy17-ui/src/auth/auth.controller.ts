import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() user: CreateUserDto) {
    return this.authService.create(user);
  }

  @Post('signin')
  async signIn(@Body() credentials: LoginDto) {
    return this.authService.signIn(credentials.email, credentials.password);
}
}

