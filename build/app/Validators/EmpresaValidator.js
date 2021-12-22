"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class EmpresaValidatorStore {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            nomeempresa: Validator_1.schema.string({ trim: true }),
            nomefantasia: Validator_1.schema.string({ trim: true }),
            cpfcnpj: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(14), Validator_1.rules.maxLength(18), Validator_1.rules.unique({ table: 'empresas', column: 'cpfcnpj' })]),
            endereco: Validator_1.schema.string({ trim: true }),
            bairro: Validator_1.schema.string({ trim: true }),
            numero: Validator_1.schema.string({ trim: true }),
            cidade: Validator_1.schema.string({ trim: true }),
            UF: Validator_1.schema.string({ trim: true }),
            cep: Validator_1.schema.string({ trim: true }),
            telefone: Validator_1.schema.string({ trim: true }, [Validator_1.rules.maxLength(15)]),
            email: Validator_1.schema.string({ trim: true }, [Validator_1.rules.email()]),
            ie: Validator_1.schema.string({ trim: true }),
            codibge: Validator_1.schema.string({ trim: true }),
            avatar_logo: Validator_1.schema.string.optional({ trim: true }),
        });
        this.messages = {
            'nomeempresa.required': 'Razão social não pode ficar em branco',
            'nomefantasia.required': 'Nome empresa não pode ficar em branco',
            'cpfcnpj.required': 'CPF/CNPJ não pode ficar em branco, e deve conter 11 ou 14 caracteres',
            'endereco.required': 'Endereço não pode ficar em branco',
            'bairro.required': 'Bairro não pode ficar em branco',
            'numero.required': 'Número não pode ficar em branco',
            'cidade.required': 'Cidade não pode ficar em branco',
            'UF.required': 'UF não pode ficar em branco',
            'cep.required': 'CEP não pode ficar em branco',
            'telefone.required': 'Número de telefone não valido digite o DDD digito 9  e os demais digitos',
            'email.required': 'Email precisa ser um email válido',
            'ie.required': 'Inscrição estadual não pode ficar em branco',
        };
    }
}
class EmpresaValidatorUpdate {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            nomeempresa: Validator_1.schema.string({ trim: true }),
            nomefantasia: Validator_1.schema.string({ trim: true }),
            cpfcnpj: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(14), Validator_1.rules.maxLength(18)]),
            endereco: Validator_1.schema.string({ trim: true }),
            bairro: Validator_1.schema.string({ trim: true }),
            numero: Validator_1.schema.string({ trim: true }),
            cidade: Validator_1.schema.string({ trim: true }),
            UF: Validator_1.schema.string({ trim: true }),
            cep: Validator_1.schema.string({ trim: true }),
            telefone: Validator_1.schema.string({ trim: true }, [Validator_1.rules.maxLength(15)]),
            email: Validator_1.schema.string({ trim: true }, [Validator_1.rules.email()]),
            ie: Validator_1.schema.string({ trim: true }),
            codibge: Validator_1.schema.string({ trim: true }),
            avatar_logo: Validator_1.schema.string.optional({ trim: true }),
        });
        this.messages = {
            'nomeempresa.required': 'Razão social não pode ficar em branco',
            'nomefantasia.required': 'Nome empresa não pode ficar em branco',
            'cpfcnpj.required': 'CPF/CNPJ não pode ficar em branco, e deve conter 11 ou 14 caracteres',
            'endereco.required': 'Endereço não pode ficar em branco',
            'bairro.required': 'Bairro não pode ficar em branco',
            'numero.required': 'Número não pode ficar em branco',
            'cidade.required': 'Cidade não pode ficar em branco',
            'UF.required': 'UF não pode ficar em branco',
            'cep.required': 'CEP não pode ficar em branco',
            'telefone.required': 'Número de telefone não valido digite o DDD digito 9  e os demais digitos',
            'email.required': 'Email precisa ser um email válido',
            'ie.required': 'Inscrição estadual não pode ficar em branco',
        };
    }
}
exports.default = { EmpresaValidatorStore, EmpresaValidatorUpdate };
//# sourceMappingURL=EmpresaValidator.js.map