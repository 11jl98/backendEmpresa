import Fornecedor from 'App/Models/Fornecedor'
 
export default class FornecedorRepositories {

    static async indexFindBySelect(idEmpresa) {
        const fornecedor = await Fornecedor.query().select(['id_fornecedor', 'nome'])
        .where('id_empresa', '=', idEmpresa)
        return fornecedor
    }

    static async indexPaginate(texto, filtro, page, idEmpresa) {
        const fornecedor = await Fornecedor.query().select(['id_fornecedor', 'nome','nomefantasia','cpfcnpj', 'endereco', 'bairro','numero', 'cidade', 'uf', 'cep', 'telefone','email', 'ie', 'observacao'])
        .where('id_empresa', '=', idEmpresa)
        .andWhere(filtro, 'like', `%${texto}%`)
        .orderBy(filtro, 'asc')
        .paginate(page, 5)
        return fornecedor
    }

    static async indexInit( page, idEmpresa) {
        const fornecedor = await Fornecedor.query().select(['id_fornecedor', 'nome','nomefantasia','cpfcnpj', 'endereco', 'bairro','numero', 'cidade', 'uf', 'cep', 'telefone','email', 'ie', 'observacao'])
        .where('id_empresa', '=', idEmpresa)
        .paginate(page, 5)
        return fornecedor
    }
}
