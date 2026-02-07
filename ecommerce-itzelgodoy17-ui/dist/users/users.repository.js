"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
let UserRepository = class UserRepository {
    users = [
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
    findOne(id) {
        this.users.find((user) => id === user.id);
    }
    save(user) {
        const newUser = {
            ...user,
            id: this.users[this.users.length - 1].id + 1,
        };
        this.users.push();
        return newUser;
    }
    update(id, data) {
        const user = this.users.find((user) => id === user.id);
        const index = this.users.findIndex((user) => id === user.id);
        if (!user)
            return "User not found";
        const updateUser = {
            ...user,
            ...data,
        };
        this.users[index] = updateUser;
        return updateUser;
    }
    delete(id) {
        const deleteUser = this.users.filter((user) => id !== user.id);
        this.users = deleteUser;
        return this.users;
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)()
], UserRepository);
//# sourceMappingURL=users.repository.js.map