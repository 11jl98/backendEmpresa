"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.post('/auth', 'AuthController.store');
Route_1.default.delete('/auth', 'AuthController.destroy').middleware('auth');
//# sourceMappingURL=auth.js.map