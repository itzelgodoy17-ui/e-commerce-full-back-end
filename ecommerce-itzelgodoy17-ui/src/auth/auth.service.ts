import { BadRequestException, ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/users/entities/user.entity';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private readonly usersRepository: Repository<Users>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: any) {
    const { password, confirmPassword, email, ...userData } = createUserDto;

    if (password !== confirmPassword) {
      throw new BadRequestException('La contraseña y la confirmación no coinciden');
    }

    const existingUser = await this.usersRepository.findOneBy({ email });
    if (existingUser) {
      throw new ConflictException(`El correo ${email} ya está registrado`);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await this.usersRepository.save({
      ...userData,
      email,
      password: hashedPassword,
    });

    const { password: _, ...userNoPassword } = newUser;
    return userNoPassword;
  }

  async signIn(email: string, pass: string) {
    const user = await this.usersRepository.findOneBy({ email });

    if (!user || !(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException('Email o contraseña incorrectos');
    }

    const payload = { id: user.id, email: user.email, isAdmin: user.isAdmin }; 
    
    return {
      message: 'Usuario logueado con éxito',
      token: await this.jwtService.signAsync(payload),
    };
  };
}