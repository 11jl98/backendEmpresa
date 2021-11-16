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
const Cliente_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Cliente"));
const Propriedade_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Propriedade"));
const ResponsavelTecnico_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ResponsavelTecnico"));
class Receita extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", String)
], Receita.prototype, "idReceita", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "idEmpresa", void 0);
__decorate([
    Orm_1.belongsTo(() => User_1.default, { foreignKey: 'idEmpresa' }),
    __metadata("design:type", Object)
], Receita.prototype, "user", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "idCliente", void 0);
__decorate([
    Orm_1.belongsTo(() => Cliente_1.default, { foreignKey: 'idCliente' }),
    __metadata("design:type", Object)
], Receita.prototype, "cliente", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "idPropriedade", void 0);
__decorate([
    Orm_1.belongsTo(() => Propriedade_1.default, { foreignKey: 'idPropriedade' }),
    __metadata("design:type", Object)
], Receita.prototype, "propriedade", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "idResponsavel", void 0);
__decorate([
    Orm_1.belongsTo(() => ResponsavelTecnico_1.default, { foreignKey: 'idResponsavel' }),
    __metadata("design:type", Object)
], Receita.prototype, "responsavel", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "numeroreceita", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "numeroart", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "data", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "nome", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "statusreceita", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "observacao", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "obsmip", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "notafiscal", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "serie", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "valor", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "datafinal", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "statussc", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "jsonsc", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "codretsc", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "enviado", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "devolucao", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "cogoias", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "seriesc", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "complementoreceita", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "chavenfe", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "datanfe", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "protocolors", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "protocolocancelamentors", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "contrato", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "nomecliente", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Receita.prototype, "nomeresponsavel", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Receita.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Receita.prototype, "updatedAt", void 0);
exports.default = Receita;
//# sourceMappingURL=Receita.js.map