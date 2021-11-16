"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Lotes extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'lotes';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id_lote').primary();
            table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE');
            table.integer('id_agrotoxico');
            table.string('nomeagrotoxico');
            table.string('embalagem');
            table.string('unidadeembalagem');
            table.string('capacidadeembalagem');
            table.string('numlote');
            table.string('datavencimento');
            table.text('observacao', 'longtext');
            table.timestamps(true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Lotes;
//# sourceMappingURL=1627905541172_lotes.js.map