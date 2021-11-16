"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Acl {
    async handle({ response }, next, allowRules) {
        if (allowRules[0].trim() !== 'admin') {
            return response.unauthorized({ error: { message: 'not authorized' } });
        }
        await next();
    }
}
exports.default = Acl;
//# sourceMappingURL=Acl.js.map