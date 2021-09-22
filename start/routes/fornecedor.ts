import Route from '@ioc:Adonis/Core/Route'
Route.get('/fornecedor/:texto/:filtro/:page', 'FornecedorController.indexPaginate')
Route.get('/fornecedor/:page', 'FornecedorController.indexInit')
Route.get('/fornecedor', 'FornecedorController.index')
Route.get('/fornecedor/schema/:id', 'FornecedorController.show')
Route.post('/fornecedor', 'FornecedorController.store')
Route.put('/fornecedor/:id', 'FornecedorController.update')
Route.delete('/fornecedor/:id', 'FornecedorController.destroy')
