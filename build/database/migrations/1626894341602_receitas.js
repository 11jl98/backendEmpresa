"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Receitas extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'receitas';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id_receita').primary();
            table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE');
            table.uuid('id_cliente').references('id_cliente').inTable('clientes').onUpdate('CASCADE');
            table.uuid('id_propriedade').references('id_propriedade').inTable('propriedades').onUpdate('CASCADE');
            table.uuid('id_responsavel').references('id_responsavel').inTable('responsavel_tecnicos').onUpdate('CASCADE');
            table.string('numeroreceita', 255);
            table.string('numeroart', 255);
            table.string('data');
            table.string('nome');
            table.string('statusreceita');
            table.text('observacao', 'longtext');
            table.text('obsmip', 'longtext');
            table.string('notafiscal');
            table.string('serie');
            table.string('valor');
            table.string('datafinal');
            table.string('statussc');
            table.text('jsonsc', 'longtext');
            table.string('codretsc');
            table.string('enviado');
            table.string('devolucao');
            table.string('cogoias');
            table.string('seriesc');
            table.string('complementoreceita');
            table.string('chavenfe');
            table.string('datanfe');
            table.string('protocolors');
            table.string('protocolocancelamentors');
            table.string('contrato');
            table.string('nomecliente', 200);
            table.string('nomeresponsavel', 200);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Receitas;
//# sourceMappingURL=1626894341602_receitas.js.map