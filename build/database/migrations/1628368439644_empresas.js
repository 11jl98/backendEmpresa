"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Empresas extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'empresas';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id_cadastro').primary();
            table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE');
            table.string('nomeempresa');
            table.string('nomefantasia');
            table.string('cpfcnpj', 20);
            table.string('endereco', 255);
            table.string('bairro', 50);
            table.string('numero', 20);
            table.string('cidade', 150);
            table.string('UF', 5);
            table.string('cep', 10);
            table.string('telefone', 15);
            table.string('telefone2', 15);
            table.string('email', 100);
            table.string('ie', 20);
            table.string('avatar_logo');
            table.string('codibge');
            table.timestamps(true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Empresas;
//# sourceMappingURL=1628368439644_empresas.js.map