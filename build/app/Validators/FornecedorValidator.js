"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class FornecedorValidatorStore {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            nome: Validator_1.schema.string({ trim: true }),
            nomefantasia: Validator_1.schema.string({ trim: true }),
            cpfcnpj: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(14), Validator_1.rules.maxLength(18), Validator_1.rules.unique({ table: 'clientes', column: 'cpfcnpj' })]),
            endereco: Validator_1.schema.string.optional({ trim: true }),
            bairro: Validator_1.schema.string.optional({ trim: true }),
            numero: Validator_1.schema.string.optional({ trim: true }),
            cidade: Validator_1.schema.string.optional({ trim: true }),
            uf: Validator_1.schema.string.optional({ trim: true }),
            cep: Validator_1.schema.string.optional({ trim: true }),
            telefone: Validator_1.schema.string.optional({ trim: true }, [Validator_1.rules.maxLength(15)]),
            email: Validator_1.schema.string.optional({ trim: true }, [Validator_1.rules.email()]),
            ie: Validator_1.schema.string({ trim: true }),
            observacao: Validator_1.schema.string.optional({ trim: true }),
            codibge: Validator_1.schema.string({ trim: true })
        });
        this.messages = {};
    }
}
class FornecedorValidatorUpdate {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            nome: Validator_1.schema.string({ trim: true }),
            nomefantasia: Validator_1.schema.string({ trim: true }),
            cpfcnpj: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(14), Validator_1.rules.maxLength(18)]),
            endereco: Validator_1.schema.string.optional({ trim: true }),
            bairro: Validator_1.schema.string.optional({ trim: true }),
            numero: Validator_1.schema.string.optional({ trim: true }),
            cidade: Validator_1.schema.string.optional({ trim: true }),
            uf: Validator_1.schema.string.optional({ trim: true }),
            cep: Validator_1.schema.string.optional({ trim: true }),
            telefone: Validator_1.schema.string.optional({ trim: true }, [Validator_1.rules.maxLength(15)]),
            email: Validator_1.schema.string.optional({ trim: true }, [Validator_1.rules.email()]),
            ie: Validator_1.schema.string({ trim: true }),
            observacao: Validator_1.schema.string.optional({ trim: true }),
            codibge: Validator_1.schema.string({ trim: true })
        });
        this.messages = {};
    }
}
exports.default = { FornecedorValidatorStore, FornecedorValidatorUpdate };
//# sourceMappingURL=FornecedorValidator.js.map