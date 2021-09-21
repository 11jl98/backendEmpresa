"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class PropriedadeValidatorStore {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            id_cliente: Validator_1.schema.string({}),
            nomepropriedade: Validator_1.schema.string({ trim: true }),
            endereco: Validator_1.schema.string({ trim: true }),
            bairro: Validator_1.schema.string({ trim: true }),
            numero: Validator_1.schema.string({ trim: true }),
            cidade: Validator_1.schema.string({ trim: true }),
            uf: Validator_1.schema.string({ trim: true }),
            cep: Validator_1.schema.string({ trim: true }),
            latitude: Validator_1.schema.string({ trim: true }),
            longitude: Validator_1.schema.string({ trim: true }),
        });
        this.messages = {};
    }
}
class PropriedadeValidatorUpdate {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            id_cliente: Validator_1.schema.string({}),
            nomepropriedade: Validator_1.schema.string({ trim: true }),
            endereco: Validator_1.schema.string({ trim: true }),
            bairro: Validator_1.schema.string({ trim: true }),
            numero: Validator_1.schema.string({ trim: true }),
            cidade: Validator_1.schema.string({ trim: true }),
            uf: Validator_1.schema.string({ trim: true }),
            cep: Validator_1.schema.string({ trim: true }),
            latitude: Validator_1.schema.string({ trim: true }),
            longitude: Validator_1.schema.string({ trim: true }),
        });
        this.messages = {};
    }
}
exports.default = { PropriedadeValidatorStore, PropriedadeValidatorUpdate };
//# sourceMappingURL=PropriedadeValidator.js.map