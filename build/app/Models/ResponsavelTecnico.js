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
class ResponsavelTecnico extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "idResponsavel", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "idEmpresa", void 0);
__decorate([
    Orm_1.belongsTo(() => User_1.default, { foreignKey: 'idEmpresa' }),
    __metadata("design:type", Object)
], ResponsavelTecnico.prototype, "user", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "nome", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "crea", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "cpf", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "endereco", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "bairro", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "numero", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "cidade", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "UF", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "cep", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "telefone", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "email", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "receitasart", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "proximareceita", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "artatual", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "observacao", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "profissao", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "tokensc", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "complementoreceita", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "seriesc", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "conselho", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], ResponsavelTecnico.prototype, "contrato", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], ResponsavelTecnico.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], ResponsavelTecnico.prototype, "updatedAt", void 0);
exports.default = ResponsavelTecnico;
//# sourceMappingURL=ResponsavelTecnico.js.map