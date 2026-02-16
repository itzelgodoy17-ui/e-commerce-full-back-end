import { OrderDetails } from "./orderDetails.entity";
import { Users } from "src/users/entities/user.entity";
export declare class Orders {
    id: string;
    date: Date;
    orderDetails: OrderDetails;
    user: Users;
}
