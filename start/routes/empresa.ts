import Route from '@ioc:Adonis/Core/Route'

Route.post('/empresa', 'EmpresasController.store')
Route.put('/empresa/:id', 'EmpresasController.update')
Route.post('/empresa/save/logo/:id', 'EmpresasController.storeToLogo')
Route.get('/empresa', 'EmpresasController.index')
