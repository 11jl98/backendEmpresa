"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class PropriedadeValidatorStore {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            id_cliente: Validator_1.schema.string({}),
            nomepropriedade: Validator_1.schema.string({ trim: true }),
            cpfcnpj: Validator_1.schema.string.optional({ trim: true }, [Validator_1.rules.minLength(14), Validator_1.rules.maxLength(18)]),
            iepr: Validator_1.schema.string.optional({ trim: true }),
            rgie: Validator_1.schema.string.optional({ trim: true }),
            endereco: Validator_1.schema.string({ trim: true }),
            bairro: Validator_1.schema.string({ trim: true }),
            numero: Validator_1.schema.string({ trim: true }),
            cidade: Validator_1.schema.string({ trim: true }),
            uf: Validator_1.schema.string({ trim: true }),
            cep: Validator_1.schema.string({ trim: true }),
            latitude: Validator_1.schema.string.optional({ trim: true }),
            longitude: Validator_1.schema.string.optional({ trim: true }),
            codibge: Validator_1.schema.string.optional({ trim: true })
        });
        this.messages = {
            'id_cliente.required': 'É necessário um cliente selecionado',
            'nomepropriedade.required': 'Nome da propriedade não pode ficar em branco',
            'endereco.required': 'Endereço não pode ficar em branco',
            'bairro.required': 'Bairro não pode ficar em branco',
            'numero.required': 'Numero não pode ficar em branco',
            'cidade.required': 'Cidade não pode ficar em branco',
            'uf.required': 'UF não pode ficar em branco',
            'cep.required': 'CEP não pode ficar em branco',
        };
    }
}
class PropriedadeValidatorUpdate {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            id_cliente: Validator_1.schema.string({}),
            nomepropriedade: Validator_1.schema.string({ trim: true }),
            cpfcnpj: Validator_1.schema.string.optional({ trim: true }, [Validator_1.rules.minLength(14), Validator_1.rules.maxLength(18)]),
            iepr: Validator_1.schema.string.optional({ trim: true }),
            rgie: Validator_1.schema.string.optional({ trim: true }),
            endereco: Validator_1.schema.string({ trim: true }),
            bairro: Validator_1.schema.string({ trim: true }),
            numero: Validator_1.schema.string({ trim: true }),
            cidade: Validator_1.schema.string({ trim: true }),
            uf: Validator_1.schema.string({ trim: true }),
            cep: Validator_1.schema.string({ trim: true }),
            latitude: Validator_1.schema.string.optional({ trim: true }),
            longitude: Validator_1.schema.string.optional({ trim: true }),
            codibge: Validator_1.schema.string.optional({ trim: true })
        });
        this.messages = {
            'id_cliente.required': 'É necessário um cliente selecionado',
            'nomepropriedade.required': 'Nome da propriedade não pode ficar em branco',
            'endereco.required': 'Endereço não pode ficar em branco',
            'bairro.required': 'Bairro não pode ficar em branco',
            'numero.required': 'Numero não pode ficar em branco',
            'cidade.required': 'Cidade não pode ficar em branco',
            'uf.required': 'UF não pode ficar em branco',
            'cep.required': 'CEP não pode ficar em branco',
        };
    }
}
exports.default = { PropriedadeValidatorStore, PropriedadeValidatorUpdate };
//# sourceMappingURL=PropriedadeValidator.js.map