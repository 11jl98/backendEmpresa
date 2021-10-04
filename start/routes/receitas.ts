import Route from '@ioc:Adonis/Core/Route'

Route.get('/receitas/:texto/:filtro/:page', 'ReceitasController.index')
Route.get('/receitas/pesquisa/:page', 'ReceitasController.indexPaginate')
Route.get('/receitas/:id', 'ReceitasController.show')
Route.get('/receitas/pesquisa/:dataInit/:dataFinal/:page', 'ReceitasController.indexDate')
Route.get('/receitas/:dataInit/:dataFinal/:texto/:filtro/:page', 'ReceitasController.indexParamsDate')
Route.post('/receitas', 'ReceitasController.store')
Route.put('/receitas/:id', 'ReceitasController.update')
Route.delete('/receitas/:id', 'ReceitasController.destroy')
