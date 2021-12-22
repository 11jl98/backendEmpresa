"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class AvatarLogos extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'avatar_logos';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id_avatar').primary();
            table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE');
            table.string('filename').notNullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = AvatarLogos;
//# sourceMappingURL=1639048806956_avatar_logos.js.map