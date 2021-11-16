"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/estoque/:texto/:filtro/:page', 'MovimentaestoquesController.indexByParams');
Route_1.default.get('/estoque/pesquisa/:dataInit/:dataFinal/:page', 'MovimentaestoquesController.indexByDate');
Route_1.default.get('/estoque/:texto/:filtro/:dataInit/:dataFinal/:page', 'MovimentaestoquesController.indexByParamsDate');
Route_1.default.get('/estoque/:page', 'MovimentaestoquesController.index');
Route_1.default.post('/estoque', 'MovimentaestoquesController.store');
Route_1.default.put('/estoque/:id', 'MovimentaestoquesController.update');
Route_1.default.delete('/estoque/:id', 'MovimentaestoquesController.destroy');
//# sourceMappingURL=estoque.js.map