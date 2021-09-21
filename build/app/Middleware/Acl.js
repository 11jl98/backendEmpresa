"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Acl {
    async handle({ auth, response }, next, allowRules) {
        const user = await auth.authenticate();
        console.log(user.rule, allowRules);
        if (allowRules[0].trim() !== 'admin') {
            return response.unauthorized({ error: { message: 'not authorized' } });
        }
        await next();
    }
}
exports.default = Acl;
//# sourceMappingURL=Acl.js.map