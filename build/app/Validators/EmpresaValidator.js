"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class EmpresaValidatorStore {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            nomeempresa: Validator_1.schema.string({ trim: true }),
            nomefantasia: Validator_1.schema.string({ trim: true }),
            cpfcnpj: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(11), Validator_1.rules.maxLength(25), Validator_1.rules.unique({ table: 'empresas', column: 'cpfcnpj' })]),
            endereco: Validator_1.schema.string({ trim: true }),
            bairro: Validator_1.schema.string({ trim: true }),
            numero: Validator_1.schema.string({ trim: true }),
            cidade: Validator_1.schema.string({ trim: true }),
            UF: Validator_1.schema.string({ trim: true }),
            cep: Validator_1.schema.string({ trim: true }),
            telefone: Validator_1.schema.string({ trim: true }, [Validator_1.rules.maxLength(11)]),
            email: Validator_1.schema.string({ trim: true }, [Validator_1.rules.email()]),
            ie: Validator_1.schema.string({ trim: true }),
        });
        this.messages = {};
    }
}
class EmpresaValidatorUpdate {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            nomeempresa: Validator_1.schema.string({ trim: true }),
            nomefantasia: Validator_1.schema.string({ trim: true }),
            cpfcnpj: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(11), Validator_1.rules.maxLength(25)]),
            endereco: Validator_1.schema.string({ trim: true }),
            bairro: Validator_1.schema.string({ trim: true }),
            numero: Validator_1.schema.string({ trim: true }),
            cidade: Validator_1.schema.string({ trim: true }),
            UF: Validator_1.schema.string({ trim: true }),
            cep: Validator_1.schema.string({ trim: true }),
            telefone: Validator_1.schema.string({ trim: true }, [Validator_1.rules.maxLength(11)]),
            email: Validator_1.schema.string({ trim: true }, [Validator_1.rules.email()]),
            ie: Validator_1.schema.string({ trim: true }),
        });
        this.messages = {};
    }
}
exports.default = { EmpresaValidatorStore, EmpresaValidatorUpdate };
//# sourceMappingURL=EmpresaValidator.js.map