"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class EmbalagensSiccas extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'embalagens_siccas';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id_cod_sicca').primary();
            table.decimal('codsicca', 20);
            table.string('unidadeembalagem', 20);
            table.decimal('capacidadeembalagem', 20);
            table.timestamps(true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = EmbalagensSiccas;
//# sourceMappingURL=1637860789660_embalagens_siccas.js.map