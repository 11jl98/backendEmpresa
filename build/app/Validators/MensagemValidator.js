"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class MensagemValidatorStore {
    constructor() {
        this.schema = Validator_1.schema.create({
            titulo: Validator_1.schema.string({ trim: true }, [Validator_1.rules.maxLength(50)]),
            observacao: Validator_1.schema.string({ trim: true }),
        });
        this.messages = {};
    }
}
class MensagemValidatorUpdate {
    constructor() {
        this.schema = Validator_1.schema.create({
            titulo: Validator_1.schema.string({ trim: true }, [Validator_1.rules.maxLength(50)]),
            observacao: Validator_1.schema.string({ trim: true }),
        });
        this.messages = {};
    }
}
exports.default = { MensagemValidatorStore, MensagemValidatorUpdate };
//# sourceMappingURL=MensagemValidator.js.map