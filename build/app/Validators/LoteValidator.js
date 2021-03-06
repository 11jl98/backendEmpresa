"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class LoteValidatorStore {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            id_agrotoxico: Validator_1.schema.number(),
            nomeagrotoxico: Validator_1.schema.string({ trim: true }),
            embalagem: Validator_1.schema.string({ trim: true }),
            unidadeembalagem: Validator_1.schema.string.optional({ trim: true }),
            capacidadeembalagem: Validator_1.schema.string.optional({ trim: true }),
            numlote: Validator_1.schema.string({ trim: true }, [Validator_1.rules.unique({ table: 'lotes', column: 'numlote' })]),
            observacao: Validator_1.schema.string.optional({ trim: true }),
            datavencimento: Validator_1.schema.string.optional({ trim: true }),
        });
        this.messages = {};
    }
}
class LoteValidatorUpdate {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            id_agrotoxico: Validator_1.schema.number(),
            nomeagrotoxico: Validator_1.schema.string({ trim: true }),
            embalagem: Validator_1.schema.string({ trim: true }),
            unidadeembalagem: Validator_1.schema.string.optional({ trim: true }),
            capacidadeembalagem: Validator_1.schema.string.optional({ trim: true }),
            numlote: Validator_1.schema.string({ trim: true }),
            observacao: Validator_1.schema.string.optional({ trim: true }),
        });
        this.messages = {};
    }
}
exports.default = { LoteValidatorStore, LoteValidatorUpdate };
//# sourceMappingURL=LoteValidator.js.map