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
class Propriedade extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", String)
], Propriedade.prototype, "idPropriedade", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Propriedade.prototype, "idEmpresa", void 0);
__decorate([
    Orm_1.belongsTo(() => User_1.default, { foreignKey: 'idEmpresa' }),
    __metadata("design:type", Object)
], Propriedade.prototype, "user", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Propriedade.prototype, "idCliente", void 0);
__decorate([
    Orm_1.belongsTo(() => Cliente_1.default, { foreignKey: 'idCliente' }),
    __metadata("design:type", Object)
], Propriedade.prototype, "cliente", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Propriedade.prototype, "nomepropriedade", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Propriedade.prototype, "endereco", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Propriedade.prototype, "bairro", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Propriedade.prototype, "numero", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Propriedade.prototype, "cidade", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Propriedade.prototype, "UF", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Propriedade.prototype, "cep", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Propriedade.prototype, "cnpj", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Propriedade.prototype, "email", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Propriedade.prototype, "latitude", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Propriedade.prototype, "longitude", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Propriedade.prototype, "telefone", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Propriedade.prototype, "iepr", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Propriedade.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Propriedade.prototype, "updatedAt", void 0);
exports.default = Propriedade;
//# sourceMappingURL=Propriedade.js.map