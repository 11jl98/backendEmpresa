"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.post('/user', 'UsersController.store').middleware('acl: admin');
Route_1.default.get('/user/:id', 'UsersController.show').middleware('acl: admin');
Route_1.default.delete('/user/id', 'UsersController.destroy').middleware('acl: admin');
//# sourceMappingURL=user.js.map