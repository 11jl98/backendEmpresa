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
            'id_responsavel.required': 'Selecione uma respons??vel para prosseguir',
            'numeroreceita.required': 'n??mero da receita ?? obrigat??rio',
            'numeroart.required': 'n??mero de ART para prosseguir',
            'data.required': 'data n??o foi preenchida',
            'notafiscal.required': 'n??mero de nota fiscal ?? obrigat??rio',
            'serie.required': 'n??mero de s??rie ?? obrigat??rio',
            'complementoreceita.required': 'complemento da receita ?? obrigat??rio',
            'datanfe.required': 'data da NF-e n??o foi preenchida',
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
            'id_responsavel.required': 'Selecione uma respons??vel para prosseguir',
            'numeroreceita.required': 'n??mero da receita ?? obrigat??rio',
            'numeroart.required': 'n??mero de ART para prosseguir',
            'data.required': 'data n??o foi preenchida',
            'notafiscal.required': 'n??mero de nota fiscal ?? obrigat??rio',
            'serie.required': 'n??mero de s??rie ?? obrigat??rio',
            'complementoreceita.required': 'complemento da receita ?? obrigat??rio',
            'datanfe.required': 'data da NF-e n??o foi preenchida',
        };
    }
}
exports.default = { ReceitaValidatorStore, ReceitaValidatorUpdate };
//# sourceMappingURL=ReceitaValidator.js.map