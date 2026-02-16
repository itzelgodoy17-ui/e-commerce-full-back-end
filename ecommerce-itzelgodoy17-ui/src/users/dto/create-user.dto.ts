import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsString, Length, Matches } from 'class-validator';

export class CreateUserDto {

  @ApiProperty({
    example: "Don Jese",
    description: "Nombre valido"
  })
  @IsNotEmpty()
  @IsString()
  @Length(3, 80)
  name: string;

   @ApiProperty({
    example: "jose@gmail.com",
    description: "Gmail valido"
  })
  @IsEmail()
  email: string;


  @ApiProperty({
    example: "Campeones1!",
    description: "Contraseña valido"
  })
  @IsNotEmpty()
  @IsString()
  @Length(8, 15)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/, {
    message: 'La contraseña debe contener al menos una minúscula, una mayúscula, un número y un carácter especial (!@#$%^&*)',
  })
  password: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 80)
  address: string;

  @IsNotEmpty()
  @IsNumber()
  phone: number;

  @IsNotEmpty()
  @IsString()
  @Length(5, 20)
  country: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 20)
  city: string;

  @IsNotEmpty()
  @IsString()
  confirmPassword: string;

  @IsEmpty()
  isAdmin?: boolean;
}

export class LoginDto extends PickType(CreateUserDto, ["email", "password"]) {}