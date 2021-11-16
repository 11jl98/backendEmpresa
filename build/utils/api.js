"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Axios = axios_1.default.create({
    baseURL: 'http://bmsltda.com.br/',
    timeout: 30000,
});
exports.default = Axios;
//# sourceMappingURL=api.js.map