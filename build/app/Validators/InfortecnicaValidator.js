"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class InfortecnicaValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            id_receita: Validator_1.schema.string(),
            aplicacao: Validator_1.schema.string({ trim: true }),
            areatratar: Validator_1.schema.string({ trim: true }),
            classetoxico: Validator_1.schema.string({ trim: true }),
            classificacaocultura: Validator_1.schema.string({ trim: true }),
            codcultura: Validator_1.schema.string({ trim: true }),
            concentracao: Validator_1.schema.string({ trim: true }),
            dosagem: Validator_1.schema.string({ trim: true }),
            epi: Validator_1.schema.string({ trim: true }),
            epocaaplicacao: Validator_1.schema.string({ trim: true }),
            estagiocultura: Validator_1.schema.string({ trim: true }),
            fitoxidade: Validator_1.schema.string({ trim: true }),
            formulacao: Validator_1.schema.string({ trim: true }),
            horario: Validator_1.schema.string({ trim: true }),
            nomeembalagem: Validator_1.schema.string({ trim: true }),
            tipoembalagem: Validator_1.schema.string({ trim: true }),
            unidademmbalagem: Validator_1.schema.string({ trim: true }),
            indicacao: Validator_1.schema.string({ trim: true }),
            ingredienteativo: Validator_1.schema.string({ trim: true }),
            intervaloaplicacao: Validator_1.schema.string({ trim: true }),
            intervaloentrada: Validator_1.schema.string({ trim: true }),
            intervaloseguranca: Validator_1.schema.string({ trim: true }),
            lote: Validator_1.schema.string({ trim: true }),
            modaplicacao: Validator_1.schema.string({ trim: true }),
            modoaplicacao: Validator_1.schema.string({ trim: true }),
            nomeagrotoxico: Validator_1.schema.string({ trim: true }),
            nomecultura: Validator_1.schema.string({ trim: true }),
            nomeclasse: Validator_1.schema.string({ trim: true }),
            nomeclasseambiental: Validator_1.schema.string({ trim: true }),
            nomegrupoquimico: Validator_1.schema.string({ trim: true }),
            numeroaplicacoes: Validator_1.schema.string({ trim: true }),
            problemacientifico: Validator_1.schema.string({ trim: true }),
            problemacomum: Validator_1.schema.string({ trim: true }),
            quantembal: Validator_1.schema.string({ trim: true }),
            quantidadeadquirir: Validator_1.schema.string({ trim: true }),
            registroagrotoxico: Validator_1.schema.string({ trim: true }),
            tipoaplicacao: Validator_1.schema.string({ trim: true }),
            volumecalda: Validator_1.schema.string({ trim: true })
        });
        this.messages = {};
    }
}
exports.default = InfortecnicaValidator;
//# sourceMappingURL=InfortecnicaValidator.js.map