import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

    @Injectable()
    export class UserRepository {
         users: User[] = [

            { 
             id: 1, 
             email: "ana@example.com", 
             name: "Ana García", 
             password: "hash_password_1", 
             address: "Calle Falsa 123", 
             phone: "123456789", 
             country: "España",
             city: "Madrid" 
            },
     
            { 
             id: 2, 
             email: "juan@example.com", 
             name: "Juan Pérez", 
             password: "hash_password_2", 
             address: "Av. Siempre Viva 742", 
             phone: "987654321", 
             country: "México", 
             city: "CDMX" 
            },
     
            { 
             id: 3, 
             email: "carla@example.com", 
             name: "Carla Sosa", 
             password: "hash_password_3", 
             address: "Ruta 66", 
             phone: "456123789", 
             country: "Argentina", 
             city: "Buenos Aires" 
            },
     
            { 
             id: 4, 
             email: "marta@example.com", 
             name: "Marta Díaz", 
             password: "hash_password_4", 
             address: "Paseo del Mar 5", 
             phone: "321654987" 
            },
     
            { 
             id: 5, 
             email: "luis@example.com", 
             name: "Luis Torres", 
             password: "hash_password_5", 
             address: "Diagonal 45", 
             phone: "789456123", 
             country: "Colombia" 
            },
        ];  
        
        findAll() {
            return this.users;
        }

        findOne(id: number) {
            return this.users.find((user) => id === user.id);
        }

        save(user: CreateUserDto) {
            
            const newUser = {
                ...user,
                id: this.users[this.users.length - 1].id + 1,
            };


            this.users.push();

            return newUser;
        }

        update(id: number, data: UpdateUserDto) {
            const user: User | undefined = this.users.find((user) => id === user.id);
            const index: number = this.users.findIndex((user) => id === user.id);
            if(!user) return "User not found";


            const updateUser: User = {
                ...user,
                ...data,
            };

            this.users[index] = updateUser;

            return updateUser;
        }

        delete(id: number) {
            const deleteUser: User[] | undefined = this.users.filter((user) => id !== user.id);

            this.users = deleteUser;

            return this.users;
        }
    }