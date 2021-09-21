"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Fornecedor_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Fornecedor"));
class Movimentaestoque extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "idEstoque", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "idEmpresa", void 0);
__decorate([
    Orm_1.belongsTo(() => User_1.default, { foreignKey: 'idEmpresa' }),
    __metadata("design:type", Object)
], Movimentaestoque.prototype, "user", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "idFornecedor", void 0);
__decorate([
    Orm_1.belongsTo(() => Fornecedor_1.default, { foreignKey: 'idFornecedor' }),
    __metadata("design:type", Object)
], Movimentaestoque.prototype, "fornecedor", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", luxon_1.DateTime)
], Movimentaestoque.prototype, "data", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", luxon_1.DateTime)
], Movimentaestoque.prototype, "datavencimento", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", luxon_1.DateTime)
], Movimentaestoque.prototype, "datanfe", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "dentroestado", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "embalagemindea", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "enviado", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "nomeagrotoxico", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "nomeembalagem", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "tipoembalagem", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "unidademmbalagem", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "nomeresponsaveltecnico", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "tipomovimentacao", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "json", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "naturezaoperacao", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "notafiscal", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "numlote", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "observacao", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "quantidade", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "receita", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "registroagrotox", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "serie", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Movimentaestoque.prototype, "statussc", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Movimentaestoque.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Movimentaestoque.prototype, "updatedAt", void 0);
exports.default = Movimentaestoque;
//# sourceMappingURL=Movimentaestoque.js.map