"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class ResponsavelValidatorStore {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            nome: Validator_1.schema.string({ trim: true }),
            cpf: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(11), Validator_1.rules.maxLength(25), Validator_1.rules.unique({ table: 'responsavel_tecnicos', column: 'cpf' })]),
            crea: Validator_1.schema.string.optional({ trim: true }),
            endereco: Validator_1.schema.string.optional({ trim: true }),
            bairro: Validator_1.schema.string.optional({ trim: true }),
            numero: Validator_1.schema.string.optional({ trim: true }),
            cidade: Validator_1.schema.string.optional({ trim: true }),
            uf: Validator_1.schema.string.optional({ trim: true }),
            cep: Validator_1.schema.string.optional({ trim: true }),
            telefone: Validator_1.schema.string.optional({ trim: true }),
            email: Validator_1.schema.string.optional({ trim: true }),
            receitasart: Validator_1.schema.string.optional({ trim: true }),
            proximareceita: Validator_1.schema.string.optional({ trim: true }),
            artatual: Validator_1.schema.string.optional({ trim: true }),
            observacao: Validator_1.schema.string.optional({ trim: true }),
            profissao: Validator_1.schema.string.optional({ trim: true }),
            tokensc: Validator_1.schema.string.optional({ trim: true }),
            complementoreceita: Validator_1.schema.string.optional({ trim: true }),
            seriesc: Validator_1.schema.string.optional({ trim: true }),
            conselho: Validator_1.schema.string.optional({ trim: true }),
            contrato: Validator_1.schema.string.optional({ trim: true }),
            codibge: Validator_1.schema.string({ trim: true })
        });
        this.messages = {};
    }
}
class ResponsavelValidatorUpdate {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            nome: Validator_1.schema.string({ trim: true }),
            cpf: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(11), Validator_1.rules.maxLength(25)]),
            crea: Validator_1.schema.string.optional({ trim: true }),
            endereco: Validator_1.schema.string.optional({ trim: true }),
            bairro: Validator_1.schema.string.optional({ trim: true }),
            numero: Validator_1.schema.string.optional({ trim: true }),
            cidade: Validator_1.schema.string.optional({ trim: true }),
            uf: Validator_1.schema.string.optional({ trim: true }),
            cep: Validator_1.schema.string.optional({ trim: true }),
            telefone: Validator_1.schema.string.optional({ trim: true }),
            email: Validator_1.schema.string.optional({ trim: true }),
            receitasart: Validator_1.schema.string.optional({ trim: true }),
            proximareceita: Validator_1.schema.string.optional({ trim: true }),
            artatual: Validator_1.schema.string.optional({ trim: true }),
            observacao: Validator_1.schema.string.optional({ trim: true }),
            profissao: Validator_1.schema.string.optional({ trim: true }),
            tokensc: Validator_1.schema.string.optional({ trim: true }),
            complementoreceita: Validator_1.schema.string.optional({ trim: true }),
            seriesc: Validator_1.schema.string.optional({ trim: true }),
            conselho: Validator_1.schema.string.optional({ trim: true }),
            contrato: Validator_1.schema.string.optional({ trim: true }),
            codibge: Validator_1.schema.string({ trim: true })
        });
        this.messages = {};
    }
}
exports.default = { ResponsavelValidatorStore, ResponsavelValidatorUpdate };
//# sourceMappingURL=ResponsavelValidator.js.map