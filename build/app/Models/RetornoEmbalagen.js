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
class RetornoEmbalagen extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", String)
], RetornoEmbalagen.prototype, "idRetornoembal", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], RetornoEmbalagen.prototype, "idEmpresa", void 0);
__decorate([
    Orm_1.belongsTo(() => User_1.default, { foreignKey: 'idEmpresa' }),
    __metadata("design:type", Object)
], RetornoEmbalagen.prototype, "user", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], RetornoEmbalagen.prototype, "idCliente", void 0);
__decorate([
    Orm_1.belongsTo(() => Cliente_1.default, { foreignKey: 'idCliente' }),
    __metadata("design:type", Object)
], RetornoEmbalagen.prototype, "cliente", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Date)
], RetornoEmbalagen.prototype, "data", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], RetornoEmbalagen.prototype, "embdevolvidas", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], RetornoEmbalagen.prototype, "nomecliente", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], RetornoEmbalagen.prototype, "nomeembalagem", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], RetornoEmbalagen.prototype, "nomeagrotoxico", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], RetornoEmbalagen.prototype, "nomeagrregistroagrotoxicootoxico", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], RetornoEmbalagen.prototype, "numeronf", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], RetornoEmbalagen.prototype, "numeroreceita", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], RetornoEmbalagen.prototype, "quantidadesaida", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], RetornoEmbalagen.prototype, "observacao", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], RetornoEmbalagen.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], RetornoEmbalagen.prototype, "updatedAt", void 0);
exports.default = RetornoEmbalagen;
//# sourceMappingURL=RetornoEmbalagen.js.map