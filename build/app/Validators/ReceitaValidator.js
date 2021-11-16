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
            statusreceita: Validator_1.schema.string.optional({ trim: true }),
            observacao: Validator_1.schema.string.optional({ trim: true }),
            obsmip: Validator_1.schema.string.optional({ trim: true }),
            notafiscal: Validator_1.schema.string({ trim: true }),
            serie: Validator_1.schema.string.optional({ trim: true }),
            valor: Validator_1.schema.string.optional({ trim: true }),
            datafinal: Validator_1.schema.string.optional({ trim: true }),
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
            contrato: Validator_1.schema.string.optional({ trim: true }),
            nomecliente: Validator_1.schema.string({ trim: true }),
            nomeresponsavel: Validator_1.schema.string({ trim: true })
        });
        this.messages = {
            'id_cliente.required': 'Selecione um cliente para prosseguir',
            'id_propriedade.required': 'Selecione uma propriedade para prosseguir',
            'id_responsavel.required': 'Selecione uma responsável para prosseguir',
            'numeroreceita.required': 'número da receita é obrigatório',
            'numeroart.required': 'número de ART para prosseguir',
            'data.required': 'data não foi preenchida',
            'notafiscal.required': 'número de nota fiscal é obrigatório',
            'serie.required': 'número de série é obrigatório',
            'complementoreceita.required': 'complemento da receita é obrigatório',
            'datanfe.required': 'data da NF-e não foi preenchida',
        };
    }
}
class ReceitaValidatorUpdate {
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
            statusreceita: Validator_1.schema.string.optional({ trim: true }),
            observacao: Validator_1.schema.string.optional({ trim: true }),
            obsmip: Validator_1.schema.string.optional({ trim: true }),
            notafiscal: Validator_1.schema.string({ trim: true }),
            serie: Validator_1.schema.string({ trim: true }),
            valor: Validator_1.schema.string.optional({ trim: true }),
            datafinal: Validator_1.schema.string.optional({ trim: true }),
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
            contrato: Validator_1.schema.string.optional({ trim: true }),
            nomecliente: Validator_1.schema.string({ trim: true }),
            nomeresponsavel: Validator_1.schema.string({ trim: true }),
        });
        this.messages = {
            'id_cliente.required': 'Selecione um cliente para prosseguir',
            'id_propriedade.required': 'Selecione uma propriedade para prosseguir',
            'id_responsavel.required': 'Selecione uma responsável para prosseguir',
            'numeroreceita.required': 'número da receita é obrigatório',
            'numeroart.required': 'número de ART para prosseguir',
            'data.required': 'data não foi preenchida',
            'notafiscal.required': 'número de nota fiscal é obrigatório',
            'serie.required': 'número de série é obrigatório',
            'complementoreceita.required': 'complemento da receita é obrigatório',
            'datanfe.required': 'data da NF-e não foi preenchida',
        };
    }
}
exports.default = { ReceitaValidatorStore, ReceitaValidatorUpdate };
//# sourceMappingURL=ReceitaValidator.js.map