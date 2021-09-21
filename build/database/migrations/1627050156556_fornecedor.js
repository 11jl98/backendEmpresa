"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Fornecedor extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'fornecedors';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id_fornecedor').primary();
            table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE');
            table.string('nome', 255);
            table.string('nomefantasia', 255);
            table.string('cpfcnpj', 20);
            table.string('endereco', 255);
            table.string('bairro', 50);
            table.string('numero', 20);
            table.string('cidade', 150);
            table.string('UF', 5);
            table.string('cep', 10);
            table.string('telefone', 15);
            table.string('email', 100);
            table.string('ie', 20);
            table.text('observacao', 'longtext');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Fornecedor;
//# sourceMappingURL=1627050156556_fornecedor.js.map