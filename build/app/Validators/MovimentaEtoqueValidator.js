"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class MovimentaEtoqueValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            id_fornecedor: Validator_1.schema.string.optional(),
            id_infortecnica: Validator_1.schema.string.optional(),
            embalagemindea: Validator_1.schema.string.optional({ trim: true }),
            enviado: Validator_1.schema.string.optional({ trim: true }),
            nomeagrotoxico: Validator_1.schema.string({ trim: true }),
            id_agrotoxico: Validator_1.schema.number(),
            nomeembalagem: Validator_1.schema.string({ trim: true }),
            tipoembalagem: Validator_1.schema.number(),
            unidademmbalagem: Validator_1.schema.string({ trim: true }),
            id_embalagem: Validator_1.schema.number.optional(),
            nomeresponsaveltecnico: Validator_1.schema.string({ trim: true }),
            tipomovimentacao: Validator_1.schema.string({ trim: true }),
            json: Validator_1.schema.string.optional({ trim: true }),
            notafiscal: Validator_1.schema.string({ trim: true }),
            numlote: Validator_1.schema.string.optional({ trim: true }),
            observacao: Validator_1.schema.string.optional({ trim: true }),
            quantidade: Validator_1.schema.number(),
            receita: Validator_1.schema.string.optional({ trim: true }),
            registroagrotox: Validator_1.schema.string({ trim: true }),
            serie: Validator_1.schema.string({ trim: true }),
            statussc: Validator_1.schema.string.optional({ trim: true })
        });
        this.messages = {};
    }
}
exports.default = MovimentaEtoqueValidator;
//# sourceMappingURL=MovimentaEtoqueValidator.js.map