"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class MovimentaEtoqueValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            idFornecedor: Validator_1.schema.string(),
            data: Validator_1.schema.date(),
            datavencimento: Validator_1.schema.date(),
            datanfe: Validator_1.schema.date(),
            dentroestado: Validator_1.schema.string({ trim: true }),
            embalagemindea: Validator_1.schema.string({ trim: true }),
            enviado: Validator_1.schema.string({ trim: true }),
            nomeagrotoxico: Validator_1.schema.string({ trim: true }),
            nomeembalagem: Validator_1.schema.string({ trim: true }),
            tipoembalagem: Validator_1.schema.string({ trim: true }),
            unidademmbalagem: Validator_1.schema.string({ trim: true }),
            nomeresponsaveltecnico: Validator_1.schema.string({ trim: true }),
            tipomovimentacao: Validator_1.schema.string({ trim: true }),
            json: Validator_1.schema.string({ trim: true }),
            naturezaoperacao: Validator_1.schema.string({ trim: true }),
            notafiscal: Validator_1.schema.string({ trim: true }),
            numlote: Validator_1.schema.string({ trim: true }),
            observacao: Validator_1.schema.string({ trim: true }),
            quantidade: Validator_1.schema.number(),
            receita: Validator_1.schema.string({ trim: true }),
            registroagrotox: Validator_1.schema.string({ trim: true }),
            serie: Validator_1.schema.string({ trim: true }),
            statussc: Validator_1.schema.string({ trim: true })
        });
        this.messages = {};
    }
}
exports.default = MovimentaEtoqueValidator;
//# sourceMappingURL=MovimentaEtoqueValidator.js.map