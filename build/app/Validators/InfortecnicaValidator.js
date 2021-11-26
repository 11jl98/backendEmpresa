"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class InfortecnicaValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            id_receita: Validator_1.schema.string(),
            aplicacao: Validator_1.schema.string.optional({ trim: true }),
            areatratar: Validator_1.schema.string({ trim: true }),
            classetoxico: Validator_1.schema.string.optional({ trim: true }),
            classificacaocultura: Validator_1.schema.string.optional({ trim: true }),
            codcultura: Validator_1.schema.string.optional({ trim: true }),
            concentracao: Validator_1.schema.string.optional({ trim: true }),
            dosagem: Validator_1.schema.string({ trim: true }),
            epi: Validator_1.schema.string.optional({ trim: true }),
            epocaaplicacao: Validator_1.schema.string.optional({ trim: true }),
            estagiocultura: Validator_1.schema.string.optional({ trim: true }),
            fitoxidade: Validator_1.schema.string.optional({ trim: true }),
            formulacao: Validator_1.schema.string.optional({ trim: true }),
            horario: Validator_1.schema.string.optional({ trim: true }),
            nomeembalagem: Validator_1.schema.string({ trim: true }),
            tipoembalagem: Validator_1.schema.string({ trim: true }),
            unidademmbalagem: Validator_1.schema.string({ trim: true }),
            indicacao: Validator_1.schema.string.optional({ trim: true }),
            ingredienteativo: Validator_1.schema.string.optional({ trim: true }),
            intervaloaplicacao: Validator_1.schema.string.optional({ trim: true }),
            intervaloentrada: Validator_1.schema.string({ trim: true }),
            intervaloseguranca: Validator_1.schema.string.optional({ trim: true }),
            lote: Validator_1.schema.string.optional({ trim: true }),
            id_agrotoxico: Validator_1.schema.number(),
            id_cultura: Validator_1.schema.number(),
            modaplicacao: Validator_1.schema.string({ trim: true }),
            modoaplicacao: Validator_1.schema.string({ trim: true }),
            nomeagrotoxico: Validator_1.schema.string({ trim: true }),
            nomecultura: Validator_1.schema.string({ trim: true }),
            nomeclasse: Validator_1.schema.string.optional({ trim: true }),
            nomeclasseambiental: Validator_1.schema.string.optional({ trim: true }),
            nomegrupoquimico: Validator_1.schema.string.optional({ trim: true }),
            numeroaplicacoes: Validator_1.schema.string.optional({ trim: true }),
            problemacientifico: Validator_1.schema.string({ trim: true }),
            problemacomum: Validator_1.schema.string({ trim: true }),
            quantembal: Validator_1.schema.string({ trim: true }),
            quantidadeadquirir: Validator_1.schema.string({ trim: true }),
            registroagrotoxico: Validator_1.schema.string.optional({ trim: true }),
            tipoaplicacao: Validator_1.schema.string.optional({ trim: true }),
            volumecalda: Validator_1.schema.string({ trim: true }),
            volumecaldabula: Validator_1.schema.string({ trim: true }),
            dosagembula: Validator_1.schema.string({ trim: true }),
            solo: Validator_1.schema.string.optional({ trim: true }),
        });
        this.messages = {
            'id_receita.required': 'Selecione uma receita para adicionar um produto',
            'areatratar.required': 'Área a tratar deve ser preenchido',
            'dosagem.required': 'Obrigatório informar a desagem',
            'nomeembalagem.required': 'Obrigatório informar o nome da embalagem',
            'tipoembalagem.required': 'Obrigatório informar o tipo da embalagem',
            'unidademmbalagem.required': 'Obrigatório informar a unidade da embalagem',
            'intervaloentrada.required': 'Obrigatório informar o intervalo de entrada',
            'id_agrotoxico.required': 'Obrigatório informar o ID do agrotoxico',
            'id_cultura.required': 'Obrigatório informar o ID da cultura',
            'modaplicacao.required': 'Obrigatório informar o modo de aplicação',
            'modoaplicacao.required': 'Obrigatório informar o modo de aplicação',
            'nomeagrotoxico.required': 'Obrigatório informar o nome do agrotoxico',
            'nomecultura.required': 'Obrigatório informar o nome da cultura',
            'problemacientifico.required': 'Obrigatório iformar o problema cientifico',
            'problemacomum.required': 'Obrigatório iformar o problema cientifico',
            'quantembal.required': 'Obrigatório informar a quantidade da embalagem',
            'quantidadeadquirir.required': 'Obrigatório informar a quantidade a ser adquirida',
            'volumecalda.required': 'Obrigatório informar o volume de calda',
            'volumecaldabula.required': 'Obrigatório informar o volume de calda',
            'dosagembula.required': 'Obrigatório informar a dosagem',
        };
    }
}
exports.default = InfortecnicaValidator;
//# sourceMappingURL=InfortecnicaValidator.js.map