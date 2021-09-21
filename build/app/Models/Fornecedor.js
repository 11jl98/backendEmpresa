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
class Fornecedor extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", String)
], Fornecedor.prototype, "idFornecedor", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "idEmpresa", void 0);
__decorate([
    Orm_1.belongsTo(() => User_1.default, { foreignKey: 'idEmpresa' }),
    __metadata("design:type", Object)
], Fornecedor.prototype, "user", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "nome", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "nomefantasia", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "cpfcnpj", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "endereco", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "bairro", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "numero", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "cidade", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "UF", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "cep", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "telefone", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "email", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "ie", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "observacao", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Fornecedor.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Fornecedor.prototype, "updatedAt", void 0);
exports.default = Fornecedor;
//# sourceMappingURL=Fornecedor.js.map