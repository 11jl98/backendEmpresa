"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/configuracao', 'ConfiguracaosController.index');
Route_1.default.post('/configuracao', 'ConfiguracaosController.store');
Route_1.default.put('/configuracao/:id', 'ConfiguracaosController.update');
//# sourceMappingURL=configura%C3%A7%C3%A3o.js.map