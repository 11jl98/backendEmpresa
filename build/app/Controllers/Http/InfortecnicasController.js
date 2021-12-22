"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Infortecnica_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Infortecnica"));
const InfortecnicaValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/InfortecnicaValidator"));
const MovimentaestoqueRepo_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Repositories/MovimentaestoqueRepo"));
const Movimentaestoque_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Movimentaestoque"));
const uuid_1 = require("uuid");
class InfortecnicaReceitasController {
    async index({ params, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const infortecnica = await Infortecnica_1.default.query().select()
            .where('id_empresa', '=', id)
            .andWhere('id_infortecnica', '=', params.idInfo)
            .andWhere('id_agrotoxico', '=', params.idAgrotoxico);
        return infortecnica;
    }
    async store({ request, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const Uuid = uuid_1.v4();
        const data = await request.validate(InfortecnicaValidator_1.default);
        const info = await Infortecnica_1.default.create({
            ...data,
            idEmpresa: id,
            idInfortecnica: Uuid
        });
        info.idInfortecnica = Uuid;
        await info.preload('receita');
        const quantidade = parseFloat(info.quantembal);
        const movEstoque = {
            id_infortecnica: info.idInfortecnica,
            id_agrotoxico: info.idAgrotoxico,
            data: info.receita.data,
            datanfe: info.receita.datanfe,
            datavencimento: info.receita.datanfe,
            nomeagrotoxico: info.nomeagrotoxico,
            nomeembalagem: info.nomeembalagem,
            tipoembalagem: info.tipoembalagem,
            unidademmbalagem: info.unidademmbalagem,
            tipomovimentacao: 'VENDA',
            notafiscal: info.receita.notafiscal,
            numlote: info.lote,
            quantidade: (-quantidade),
            receita: info.receita.numeroreceita,
            registroagrotox: info.registroagrotoxico,
            serie: info.receita.serie,
            nomeresponsaveltecnico: info.receita.nomeresponsavel
        };
        await MovimentaestoqueRepo_1.default.storeMovReceita(movEstoque, id, Uuid);
        return info;
    }
    async show({ params, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const info = await Infortecnica_1.default.query().where('id_empresa', '=', id).andWhere('id_receita', '=', params.id);
        return info;
    }
    async update({ request, params }) {
        const info = await Infortecnica_1.default.findOrFail(params.id);
        const data = await request.validate(InfortecnicaValidator_1.default);
        info.merge(data);
        await info.save();
        return info;
    }
    async destroy({ params }) {
        const info = await Infortecnica_1.default.findOrFail(params.id);
        await info.delete();
        const estoque = await Movimentaestoque_1.default.findOrFail(params.id);
        await estoque.delete();
    }
}
exports.default = InfortecnicaReceitasController;
//# sourceMappingURL=InfortecnicasController.js.map