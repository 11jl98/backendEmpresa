"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movimentaestoque_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Movimentaestoque"));
class InventarioestoquesController {
    async index({}) {
        const estoque = await Movimentaestoque_1.default.all();
        const est = estoque.reduce((acc, current) => {
            acc[current.nomeagrotoxico] = acc[current.nomeagrotoxico] || {};
            acc[current.nomeagrotoxico][current.nomeembalagem] = acc[current.nomeagrotoxico][current.nomeembalagem] || {};
            acc[current.nomeagrotoxico][current.nomeembalagem]['quantidade'] = acc[current.nomeagrotoxico][current.nomeembalagem]['quantidade'] || 0;
            acc[current.nomeagrotoxico][current.nomeembalagem]['quantidade'] += Number(current.quantidade);
            return acc;
        }, {});
        return est;
    }
    async show({}) {
        const estoque = await Movimentaestoque_1.default.all();
        console.log(estoque);
        const est = estoque.reduce((acc, current) => {
            acc['entrada'] = acc['entrada'] || [];
            acc['saida'] = acc['saida'] || [];
            if (current.tipomovimentacao === 'ENTRADA') {
                acc['entrada'].push(current);
            }
            else {
                acc['saida'].push(current);
            }
            return acc;
        }, {});
        return est;
    }
    async showDate({ params }) {
        const estoque = await Movimentaestoque_1.default.query()
            .where('data', '>=', params.dataInit)
            .andWhere('data', '<=', params.dataFinal);
        console.log(estoque);
        const est = estoque.reduce((acc, current) => {
            acc['entrada'] = acc['entrada'] || [];
            acc['saida'] = acc['saida'] || [];
            if (current.tipomovimentacao === 'ENTRADA') {
                acc['entrada'].push(current);
            }
            else {
                acc['saida'].push(current);
            }
            return acc;
        }, {});
        return est;
    }
}
exports.default = InventarioestoquesController;
//# sourceMappingURL=InventarioestoquesController.js.map