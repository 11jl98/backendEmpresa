"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/responsavel/:texto/:filtro/:page', 'ResponsavelTecnicosController.index');
Route_1.default.get('/responsavel/:page', 'ResponsavelTecnicosController.indexInit');
Route_1.default.get('/responsavel', 'ResponsavelTecnicosController.indexFindBySelect');
Route_1.default.get('/responsavel/schema/:id', 'ResponsavelTecnicosController.show');
Route_1.default.post('/responsavel', 'ResponsavelTecnicosController.store');
Route_1.default.put('/responsavel/:id', 'ResponsavelTecnicosController.update');
Route_1.default.delete('/responsavel/:id', 'ResponsavelTecnicosController.destroy');
//# sourceMappingURL=responsavel.js.map