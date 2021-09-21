"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class LoteAgrotoxicos extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'lote_agrotoxicos';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id_Agrotoxolote').primary();
            table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE');
            table.uuid('id_lote').references('id_lote').inTable('lotes').onUpdate('CASCADE');
            table.integer('id_agrotoxico');
            table.string('nomeagrotoxico');
            table.string('numlote');
            table.timestamps(true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = LoteAgrotoxicos;
//# sourceMappingURL=1627907815255_lote_agrotoxicos.js.map