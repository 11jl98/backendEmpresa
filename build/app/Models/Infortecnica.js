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
const Receita_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Receita"));
class InfortecnicaReceitas extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "idInfortecnica", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "idEmpresa", void 0);
__decorate([
    Orm_1.belongsTo(() => User_1.default, { foreignKey: 'idEmpresa' }),
    __metadata("design:type", Object)
], InfortecnicaReceitas.prototype, "user", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "idReceita", void 0);
__decorate([
    Orm_1.belongsTo(() => Receita_1.default, { foreignKey: 'idReceita' }),
    __metadata("design:type", Object)
], InfortecnicaReceitas.prototype, "receita", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "aplicacao", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "areatratar", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "classetoxico", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "classificacaocultura", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "codcultura", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "concentracao", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "dosagem", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "epi", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "epocaaplicacao", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "estagiocultura", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "fitoxidade", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "formulacao", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "horario", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "nomeembalagem", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "tipoembalagem", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "unidademmbalagem", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "indicacao", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "ingredienteativo", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "intervaloaplicacao", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "intervaloentrada", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "intervaloseguranca", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "lote", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], InfortecnicaReceitas.prototype, "idAgrotoxico", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], InfortecnicaReceitas.prototype, "idCultura", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "modaplicacao", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "modoaplicacao", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "nomeagrotoxico", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "nomecultura", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "nomeclasse", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "nomeclasseambiental", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "nomegrupoquimico", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "numeroaplicacoes", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "problemacientifico", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "problemacomum", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "quantembal", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "quantidadeadquirir", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "registroagrotoxico", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "tipoaplicacao", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "volumecalda", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "volumecaldabula", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "dosagembula", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], InfortecnicaReceitas.prototype, "solo", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], InfortecnicaReceitas.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], InfortecnicaReceitas.prototype, "updatedAt", void 0);
exports.default = InfortecnicaReceitas;
//# sourceMappingURL=Infortecnica.js.map