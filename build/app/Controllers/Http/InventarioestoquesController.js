"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movimentaestoque_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Movimentaestoque"));
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
class InventarioestoquesController {
    async index({ params, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const filtro = params.filtro;
        let texto = params.texto;
        texto = decodeURIComponent(texto);
        const dadosPesquisa = await Movimentaestoque_1.default
            .query()
            .select('numlote', 'nomeagrotoxico', 'id_agrotoxico', 'nomeembalagem', 'tipoembalagem', 'unidademmbalagem', 'datavencimento')
            .sum('quantidade as total')
            .where('id_empresa', '=', id)
            .andWhere(filtro, 'like', `%${texto}%`)
            .groupBy('numlote', 'nomeembalagem', 'tipoembalagem', 'unidademmbalagem')
            .orderBy('nomeagrotoxico');
        return dadosPesquisa;
    }
    async indexLote({ auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const estoque = await Database_1.default.knexRawQuery(`select estoque.numlote, estoque.datavencimento,
    estoque.nomeagrotoxico, estoque.id_agrotoxico, estoque.nomeembalagem, estoque.tipoembalagem,
     estoque.unidademmbalagem, SUM(estoque.quantidade) as total from movimentaestoques as estoque,
      lotes as lote  where estoque.id_empresa = '${id}' and estoque.numlote = lote.numlote and estoque.id_agrotoxico = lote.id_agrotoxico
       and estoque.nomeembalagem = lote.embalagem and estoque.tipoembalagem = lote.capacidadeembalagem
        and estoque.unidademmbalagem = lote.unidadeembalagem GROUP BY numlote, estoque.nomeembalagem, estoque.tipoembalagem, estoque.unidademmbalagem`);
        console.log(estoque[0]);
        return estoque[0];
    }
    async show({}) {
        const estoque = await Movimentaestoque_1.default.all();
        const est = estoque.reduce((acc, current) => {
            acc['entrada'] = acc['entrada'] || [];
            acc['saida'] = acc['saida'] || [];
            if (current.tipomovimentacao === 'COMPRA' || current.tipomovimentacao === 'TRANSFERENCIA-ENTRADA' || current.tipomovimentacao === 'INVENTARIO-ENTRADA') {
                acc['entrada'].push(current);
            }
            else if (current.tipomovimentacao === 'VENDA' || current.tipomovimentacao === 'TRANSFERENCIA-SAIDA' || current.tipomovimentacao === 'DEVOLUCAO') {
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
        const est = estoque.reduce((acc, current) => {
            acc['entrada'] = acc['entrada'] || [];
            acc['saida'] = acc['saida'] || [];
            if (current.tipomovimentacao === 'COMPRA' || current.tipomovimentacao === 'TRANSFERENCIA-ENTRADA' || current.tipomovimentacao === 'INVENTARIO-ENTRADA') {
                acc['entrada'].push(current);
            }
            else if (current.tipomovimentacao === 'VENDA' || current.tipomovimentacao === 'TRANSFERENCIA-SAIDA' || current.tipomovimentacao === 'DEVOLUCAO' || current.tipomovimentacao === 'INVENTARIO-SAIDA') {
                acc['saida'].push(current);
            }
            return acc;
        }, {});
        return est;
    }
}
exports.default = InventarioestoquesController;
//# sourceMappingURL=InventarioestoquesController.js.map