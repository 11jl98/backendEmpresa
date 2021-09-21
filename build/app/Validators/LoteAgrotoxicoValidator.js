"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class LoteAgrotoxicoValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            id_lote: Validator_1.schema.string(),
            id_agrotoxico: Validator_1.schema.string({ trim: true }),
            nomeagrotoxico: Validator_1.schema.string({ trim: true }),
            numlote: Validator_1.schema.string({ trim: true })
        });
        this.messages = {};
    }
}
exports.default = LoteAgrotoxicoValidator;
//# sourceMappingURL=LoteAgrotoxicoValidator.js.map