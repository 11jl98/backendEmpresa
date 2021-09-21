"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const uuid_1 = require("uuid");
class UserSeeder extends Seeder_1.default {
    async run() {
        await User_1.default.createMany([
            {
                login: '09410796601',
                password: 'secret',
                rule: 'admin',
                id: uuid_1.v4()
            },
        ]);
    }
}
exports.default = UserSeeder;
//# sourceMappingURL=User.js.map