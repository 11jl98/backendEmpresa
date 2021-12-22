"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SiccaRepo_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Repositories/SiccaRepo"));
class SiccasController {
    async index({ params, auth }) {
        const user = await auth.authenticate();
        const id = user.id;
        const dataInicial = params.dataInicial;
        const dataFinal = params.dataFinal;
        const sicca = await SiccaRepo_1.default.index(dataInicial, dataFinal, id);
        var str = '';
        for (var i = 0; i < sicca.length; i++) {
            var line = '';
            for (var index in sicca[i]) {
                if (index != 'agrotoxicos')
                    line += sicca[i][index] + ';';
                else
                    for (var j = 0; j < sicca[i][index].length; j++) {
                        for (var index2 in sicca[i][index][j]) {
                            line += sicca[i][index][j][index2] + ';';
                        }
                    }
            }
            line.slice(0, line.length - 1);
            str += line + '\r\n';
        }
        return str;
    }
}
exports.default = SiccasController;
//# sourceMappingURL=SiccasController.js.map