"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class RetornoEmbalagens extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'retorno_embalagens';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id_retornoembal').primary();
            table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE');
            table.uuid('id_cliente').references('id_cliente').inTable('clientes').onUpdate('CASCADE');
            table.date('data');
            table.integer('embdevolvidas');
            table.string('nomecliente');
            table.string('nomeembalagem');
            table.string('nomeagrotoxico');
            table.string('registroagrotoxico');
            table.integer('numeronf');
            table.string('numeroreceita');
            table.integer('quantidadesaida');
            table.text('observacao', 'longtext');
            table.timestamps(true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = RetornoEmbalagens;
//# sourceMappingURL=1628184956466_retorno_embalagens.js.map