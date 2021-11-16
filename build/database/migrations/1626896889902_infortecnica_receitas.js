"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class InfortecnicaReceitas extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'infortecnica_receitas';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id_infortecnica').primary();
            table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE');
            table.uuid('id_receita').references('id_receita').inTable('receitas').onUpdate('CASCADE');
            table.text('aplicacao', 'longtext');
            table.string('areatratar', 20);
            table.string('classetoxico', 100);
            table.string('classificacaocultura', 20);
            table.string('codcultura', 20);
            table.string('concentracao', 255);
            table.string('dosagem', 255);
            table.string('epi', 500);
            table.string('epocaaplicacao', 50);
            table.string('estagiocultura', 500);
            table.string('fitoxidade');
            table.string('formulacao', 50);
            table.string('horario', 255);
            table.string('nomeembalagem', 255);
            table.string('tipoembalagem', 255);
            table.string('unidademmbalagem', 255);
            table.string('indicacao', 255);
            table.string('ingredienteativo', 255);
            table.string('intervaloaplicacao', 255);
            table.string('intervaloentrada', 255);
            table.string('intervaloseguranca', 255);
            table.string('lote', 255);
            table.integer('id_agrotoxico');
            table.integer('id_cultura');
            table.string('modaplicacao', 255);
            table.text('modoaplicacao', 'longext');
            table.string('nomeagrotoxico', 255);
            table.string('nomecultura', 255);
            table.string('nomeclasse', 255);
            table.string('nomeclasseambiental', 255);
            table.string('nomegrupoquimico', 255);
            table.string('numeroaplicacoes', 255);
            table.string('problemacientifico', 255);
            table.string('problemacomum', 255);
            table.string('quantembal', 255);
            table.string('quantidadeadquirir', 255);
            table.string('registroagrotoxico', 255);
            table.string('tipoaplicacao', 255);
            table.string('volumecalda', 255);
            table.string('volumecaldabula', 255);
            table.string('dosagembula', 255);
            table.string('solo', 255);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = InfortecnicaReceitas;
//# sourceMappingURL=1626896889902_infortecnica_receitas.js.map