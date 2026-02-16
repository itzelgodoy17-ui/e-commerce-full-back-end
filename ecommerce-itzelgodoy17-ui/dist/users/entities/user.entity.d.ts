import { Orders } from "src/orders/entities/order.entity";
export declare class Users {
    id: string;
    email: string;
    name: string;
    password: string;
    phone: number;
    country: string;
    address: string;
    city: string;
    isAdmin: boolean;
    order: Orders[];
}
