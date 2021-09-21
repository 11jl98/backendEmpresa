"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/fornecedor/:texto/:filtro/:page', 'FornecedorController.indexPaginate');
Route_1.default.get('/fornecedor/:page', 'FornecedorController.indexPaginate');
Route_1.default.get('/fornecedor', 'FornecedorController.index');
Route_1.default.get('/fornecedor/schema/:id', 'FornecedorController.show');
Route_1.default.post('/fornecedor', 'FornecedorController.store');
Route_1.default.put('/fornecedor/:id', 'FornecedorController.update');
Route_1.default.delete('/fornecedor/:id', 'FornecedorController.delete');
//# sourceMappingURL=fornecedor.js.map