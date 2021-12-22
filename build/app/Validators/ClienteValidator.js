"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class ClienteValidatorStore {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            nome: Validator_1.schema.string({ trim: true }),
            cpfcnpj: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(13), Validator_1.rules.maxLength(18), Validator_1.rules.unique({ table: 'clientes', column: 'cpfcnpj' })]),
            endereco: Validator_1.schema.string({ trim: true }),
            bairro: Validator_1.schema.string({ trim: true }),
            numero: Validator_1.schema.string({ trim: true }),
            cidade: Validator_1.schema.string({ trim: true }),
            uf: Validator_1.schema.string({ trim: true }),
            cep: Validator_1.schema.string({ trim: true }),
            telefone: Validator_1.schema.string({ trim: true }, [Validator_1.rules.maxLength(15)]),
            email: Validator_1.schema.string.optional({ trim: true }, [Validator_1.rules.email()]),
            iepr: Validator_1.schema.string.optional({ trim: true }),
            observacao: Validator_1.schema.string.optional({ trim: true }),
            rgie: Validator_1.schema.string.optional({ trim: true }),
            status: Validator_1.schema.string.optional({ trim: true }),
            codibge: Validator_1.schema.string.optional({ trim: true })
        });
        this.messages = {
            'nome.required': 'Nome não pode ficar em branco',
            'cpfcnpj.required': 'CPF/CNPJ não pode ficar em branco',
            'endereco.required': 'Endereço não pode ficar em branco',
            'bairro.required': 'Bairro não pode ficar em branco',
            'numero.required': 'Número não pode ficar em branco',
            'cidade.required': 'Cidade não pode ficar em branco',
            'telefone.required': 'Telefone não pode ficar em branco',
            'uf.required': 'UF não pode ficar em branco',
            'cep.required': 'CEP não pode ficar em branco',
            'cpfcnpj.unique': 'CPF/CNPJ já cadastrado',
        };
    }
}
class ClienteValidatorUpdate {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            nome: Validator_1.schema.string({ trim: true }),
            cpfcnpj: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(14), Validator_1.rules.maxLength(18)]),
            endereco: Validator_1.schema.string({ trim: true }),
            bairro: Validator_1.schema.string({ trim: true }),
            numero: Validator_1.schema.string({ trim: true }),
            cidade: Validator_1.schema.string({ trim: true }),
            uf: Validator_1.schema.string({ trim: true }),
            cep: Validator_1.schema.string({ trim: true }),
            telefone: Validator_1.schema.string({ trim: true }, [Validator_1.rules.maxLength(15)]),
            email: Validator_1.schema.string({ trim: true }, [Validator_1.rules.email()]),
            iepr: Validator_1.schema.string({ trim: true }),
            observacao: Validator_1.schema.string.optional({ trim: true }),
            rgie: Validator_1.schema.string({ trim: true }),
            status: Validator_1.schema.string.optional({ trim: true }),
            codibge: Validator_1.schema.string({ trim: true })
        });
        this.messages = {
            'nome.required': 'Nome não pode ficar em branco',
            'nome.cpfcnpj': 'CPF/CNPJ não pode ficar em branco',
            'endereco.required': 'Endereço não pode ficar em branco',
            'bairro.required': 'Bairro não pode ficar em branco',
            'numero.required': 'Número não pode ficar em branco',
            'cidade.required': 'Cidade não pode ficar em branco',
            'telefone.required': 'Telefone não pode ficar em branco',
        };
    }
}
exports.default = { ClienteValidatorStore, ClienteValidatorUpdate };
//# sourceMappingURL=ClienteValidator.js.map