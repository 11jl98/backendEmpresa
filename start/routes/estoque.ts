import Route from '@ioc:Adonis/Core/Route'

Route.get('/estoque/:texto/:filtro/:page', 'MovimentaestoquesController.indexByParams')
Route.get('/estoque/pesquisa/:dataInit/:dataFinal/:page', 'MovimentaestoquesController.indexByDate')
Route.get('/estoque/:texto/:filtro/:dataInit/:dataFinal/:page', 'MovimentaestoquesController.indexByParamsDate')
Route.get('/estoque/paginate/:page', 'MovimentaestoquesController.index')
Route.get('/estoque/:id', 'MovimentaestoquesController.show')
Route.post('/estoque', 'MovimentaestoquesController.store')
Route.put('/estoque/:id', 'MovimentaestoquesController.update')
Route.delete('/estoque/:id', 'MovimentaestoquesController.destroy')