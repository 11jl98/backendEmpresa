"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/cliente/:texto/:filtro/:page', 'ClientesController.index');
Route_1.default.get('/cliente/:page', 'ClientesController.indexInit');
Route_1.default.get('/cliente', 'ClientesController.indexFindByCliente');
Route_1.default.get('/cliente/schema/:id', 'ClientesController.show');
Route_1.default.post('/cliente', 'ClientesController.store');
Route_1.default.put('/cliente/:id', 'ClientesController.update');
Route_1.default.delete('/cliente/:id', 'ClientesController.destroy');
//# sourceMappingURL=clientes.js.map