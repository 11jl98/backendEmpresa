"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/infortecnica/:id', 'InfortecnicasController.show');
Route_1.default.get('/infortecnica/:idInfo/:idAgrotoxico', 'InfortecnicasController.index');
Route_1.default.post('/infortecnica', 'InfortecnicasController.store');
Route_1.default.put('/infortecnica/:id', 'InfortecnicasController.update');
Route_1.default.delete('/infortecnica/:id', 'InfortecnicasController.destroy');
//# sourceMappingURL=infortercnica.js.map