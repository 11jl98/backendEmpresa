"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class ClienteValidatorStore {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            nome: Validator_1.schema.string({ trim: true }),
            cpfcnpj: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(11), Validator_1.rules.maxLength(25), Validator_1.rules.unique({ table: 'clientes', column: 'cpfcnpj' })]),
            endereco: Validator_1.schema.string({ trim: true }),
            bairro: Validator_1.schema.string({ trim: true }),
            numero: Validator_1.schema.string({ trim: true }),
            cidade: Validator_1.schema.string({ trim: true }),
            uf: Validator_1.schema.string({ trim: true }),
            cep: Validator_1.schema.string({ trim: true }),
            telefone: Validator_1.schema.string({ trim: true }, [Validator_1.rules.maxLength(11)]),
            email: Validator_1.schema.string({ trim: true }, [Validator_1.rules.email()]),
            iepr: Validator_1.schema.string({ trim: true }),
            observacao: Validator_1.schema.string.optional({ trim: true }),
            rgie: Validator_1.schema.string({ trim: true }),
            status: Validator_1.schema.string.optional({ trim: true }),
            codibge: Validator_1.schema.string({ trim: true })
        });
        this.messages = {};
    }
}
class ClienteValidatorUpdate {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            nome: Validator_1.schema.string({ trim: true }),
            cpfcnpj: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(11), Validator_1.rules.maxLength(25)]),
            endereco: Validator_1.schema.string({ trim: true }),
            bairro: Validator_1.schema.string({ trim: true }),
            numero: Validator_1.schema.string({ trim: true }),
            cidade: Validator_1.schema.string({ trim: true }),
            uf: Validator_1.schema.string({ trim: true }),
            cep: Validator_1.schema.string({ trim: true }),
            telefone: Validator_1.schema.string({ trim: true }, [Validator_1.rules.maxLength(11)]),
            email: Validator_1.schema.string({ trim: true }, [Validator_1.rules.email()]),
            iepr: Validator_1.schema.string({ trim: true }),
            observacao: Validator_1.schema.string.optional({ trim: true }),
            rgie: Validator_1.schema.string({ trim: true }),
            status: Validator_1.schema.string.optional({ trim: true }),
            codibge: Validator_1.schema.string({ trim: true })
        });
        this.messages = {};
    }
}
exports.default = { ClienteValidatorStore, ClienteValidatorUpdate };
//# sourceMappingURL=ClienteValidator.js.map