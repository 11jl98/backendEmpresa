"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Configuracaos extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'configuracaos';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.string('id_config').primary();
            table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE');
            table.string('modeloreceita').defaultTo('ModeloPadrao');
            table.enu('estoquenegativo', ['N', 'S']).defaultTo('N');
            table.decimal('quantidadeprodutoreceita', 15);
            table.timestamps(true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Configuracaos;
//# sourceMappingURL=1639424323763_configuracaos.js.map