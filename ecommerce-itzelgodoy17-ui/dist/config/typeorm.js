"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = exports.config = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const config_1 = require("@nestjs/config");
(0, dotenv_1.config)({ path: '.development.env' });
exports.config = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5433,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dropSchema: true,
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
};
exports.default = (0, config_1.registerAs)("typeorm", () => exports.config);
exports.connectionSource = new typeorm_1.DataSource(exports.config);
//# sourceMappingURL=typeorm.js.map