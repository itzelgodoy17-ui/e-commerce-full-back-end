export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: number;
    country: string;
    city: string;
    confirmPassword: string;
    isAdmin?: boolean;
}
declare const LoginDto_base: import("@nestjs/common").Type<Pick<CreateUserDto, "email" | "password">>;
export declare class LoginDto extends LoginDto_base {
}
export {};
