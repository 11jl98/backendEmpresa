"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class RetornoEmbalagenValidatorStore {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            id_cliente: Validator_1.schema.string(),
            data: Validator_1.schema.date(),
            embdevolvidas: Validator_1.schema.number(),
            nomecliente: Validator_1.schema.string({ trim: true }),
            nomeembalagem: Validator_1.schema.string({ trim: true }),
            nomeagrotoxico: Validator_1.schema.string({ trim: true }),
            registroagrotoxico: Validator_1.schema.string({ trim: true }),
            numeronf: Validator_1.schema.number(),
            numeroreceita: Validator_1.schema.string({ trim: true }),
            quantidadesaida: Validator_1.schema.number(),
            observacao: Validator_1.schema.string({ trim: true }),
        });
        this.messages = {};
    }
}
class RetornoEmbalagenValidatorUpdate {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            idid_cliente: Validator_1.schema.number(),
            data: Validator_1.schema.date(),
            embdevolvidas: Validator_1.schema.number(),
            nomecliente: Validator_1.schema.string({ trim: true }),
            nomeembalagem: Validator_1.schema.string({ trim: true }),
            nomeagrotoxico: Validator_1.schema.string({ trim: true }),
            registroagrotoxico: Validator_1.schema.string({ trim: true }),
            numeronf: Validator_1.schema.number(),
            numeroreceita: Validator_1.schema.string({ trim: true }),
            quantidadesaida: Validator_1.schema.number(),
            observacao: Validator_1.schema.string({ trim: true }),
        });
        this.messages = {};
    }
}
exports.default = { RetornoEmbalagenValidatorStore, RetornoEmbalagenValidatorUpdate };
//# sourceMappingURL=RetornoEmbalagenValidator.js.map