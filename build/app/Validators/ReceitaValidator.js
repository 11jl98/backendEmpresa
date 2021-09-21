"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class ReceitaValidatorStore {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            id_cliente: Validator_1.schema.string(),
            id_propriedade: Validator_1.schema.string(),
            id_responsavel: Validator_1.schema.string(),
            numeroreceita: Validator_1.schema.string({ trim: true }),
            numeroart: Validator_1.schema.string({ trim: true }),
            data: Validator_1.schema.string({ trim: true }),
            nome: Validator_1.schema.string({ trim: true }),
            statusreceita: Validator_1.schema.string({ trim: true }),
            observacao: Validator_1.schema.string({ trim: true }),
            obsmip: Validator_1.schema.string({ trim: true }),
            notafiscal: Validator_1.schema.string({ trim: true }),
            serie: Validator_1.schema.string({ trim: true }),
            valor: Validator_1.schema.string.optional({ trim: true }),
            datafinal: Validator_1.schema.string({ trim: true }),
            statussc: Validator_1.schema.string.optional({ trim: true }),
            jsonsc: Validator_1.schema.string.optional({ trim: true }),
            codretsc: Validator_1.schema.string.optional({ trim: true }),
            enviado: Validator_1.schema.string.optional({ trim: true }),
            devolucao: Validator_1.schema.string.optional({ trim: true }),
            cogoias: Validator_1.schema.string.optional({ trim: true }),
            seriesc: Validator_1.schema.string.optional({ trim: true }),
            complementoreceita: Validator_1.schema.string({ trim: true }),
            chavenfe: Validator_1.schema.string.optional({ trim: true }),
            datanfe: Validator_1.schema.string({ trim: true }),
            protocolors: Validator_1.schema.string.optional({ trim: true }),
            protocolocancelamentors: Validator_1.schema.string.optional({ trim: true }),
            contrato: Validator_1.schema.string.optional({ trim: true })
        });
        this.messages = {};
    }
}
class ReceitaValidatorUpdate {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            id_cliente: Validator_1.schema.number(),
            id_propriedade: Validator_1.schema.number(),
            id_responsavel: Validator_1.schema.number(),
            numeroreceita: Validator_1.schema.string({ trim: true }),
            numeroart: Validator_1.schema.string({ trim: true }),
            data: Validator_1.schema.string({ trim: true }),
            nome: Validator_1.schema.string({ trim: true }),
            statusreceita: Validator_1.schema.string({ trim: true }),
            observacao: Validator_1.schema.string({ trim: true }),
            obsmip: Validator_1.schema.string({ trim: true }),
            notafiscal: Validator_1.schema.string({ trim: true }),
            serie: Validator_1.schema.string({ trim: true }),
            valor: Validator_1.schema.string({ trim: true }),
            datafinal: Validator_1.schema.string({ trim: true }),
            statussc: Validator_1.schema.string({ trim: true }),
            jsonsc: Validator_1.schema.string({ trim: true }),
            codretsc: Validator_1.schema.string({ trim: true }),
            enviado: Validator_1.schema.string({ trim: true }),
            devolucao: Validator_1.schema.string({ trim: true }),
            cogoias: Validator_1.schema.string({ trim: true }),
            seriesc: Validator_1.schema.string({ trim: true }),
            complementoreceita: Validator_1.schema.string({ trim: true }),
            chavenfe: Validator_1.schema.string({ trim: true }),
            datanfe: Validator_1.schema.string({ trim: true }),
            protocolors: Validator_1.schema.string({ trim: true }),
            protocolocancelamentors: Validator_1.schema.string({ trim: true }),
            contrato: Validator_1.schema.string({ trim: true })
        });
        this.messages = {};
    }
}
exports.default = { ReceitaValidatorStore, ReceitaValidatorUpdate };
//# sourceMappingURL=ReceitaValidator.js.map