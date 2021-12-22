"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Mensagens extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'mensagems';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.string('id_mensagem').primary();
            table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE');
            table.string('titulo', 50);
            table.text('observacao', 'longtext');
            table.timestamps(true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Mensagens;
//# sourceMappingURL=1639767522750_mensagens.js.map