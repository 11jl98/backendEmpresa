"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Movimentaestoques extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'movimentaestoques';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id_estoque').primary;
            table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE');
            table.uuid('id_fornecedor').references('id_fornecedor').inTable('fornecedors').onUpdate('CASCADE');
            table.string('data');
            table.string('datavencimento');
            table.string('datanfe');
            table.string('dentroestado', 1);
            table.string('embalagemindea');
            table.string('enviado');
            table.string('nomeagrotoxico', 255);
            table.string('nomeembalagem', 255);
            table.string('tipoembalagem', 255);
            table.string('unidademmbalagem', 255);
            table.string('nomeresponsaveltecnico');
            table.string('tipomovimentacao');
            table.text('json', 'longtext');
            table.string('naturezaoperacao');
            table.string('notafiscal');
            table.string('numlote');
            table.text('observacao', 'longtext');
            table.decimal('quantidade');
            table.string('receita');
            table.string('registroagrotox');
            table.string('serie');
            table.string('statussc');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Movimentaestoques;
//# sourceMappingURL=1627062688689_movimentaestoques.js.map