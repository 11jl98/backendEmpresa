"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
require("./auth");
require("./user");
require("./clientes");
require("./estoque");
require("./fornecedor");
require("./infortercnica");
require("./propriedade");
require("./receitas");
require("./responsavel");
require("./inventario");
require("./empresa");
require("./retorno");
require("./lote");
Route_1.default.get('/', async () => {
    return { hello: 'world' };
});
//# sourceMappingURL=index.js.map