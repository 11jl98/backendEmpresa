"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class ConfiguracaoValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            modeloreceita: Validator_1.schema.string({ trim: true }),
            estoquenegativo: Validator_1.schema.string({ trim: true }),
            quantidadeprodutoreceita: Validator_1.schema.number(),
        });
        this.messages = {};
    }
}
exports.default = ConfiguracaoValidator;
//# sourceMappingURL=ConfiguracaoValidator.js.map