"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Clientes extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'clientes';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id_cliente').primary();
            table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE');
            table.string('nome', 255);
            table.string('cpfcnpj', 20);
            table.string('endereco', 255);
            table.string('bairro', 50);
            table.string('numero', 20);
            table.string('cidade', 150);
            table.string('UF', 5);
            table.string('cep', 10);
            table.string('telefone', 15);
            table.string('email', 100);
            table.string('iepr', 20);
            table.string('observacao', 1000);
            table.string('rgie', 20);
            table.string('status', 20);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Clientes;
//# sourceMappingURL=1626888607298_clientes.js.map