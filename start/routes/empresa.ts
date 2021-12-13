import Route from '@ioc:Adonis/Core/Route'

Route.post('/empresa', 'EmpresasController.store')
Route.put('/empresa/:id', 'EmpresasController.update')
Route.get('/empresa', 'EmpresasController.index')
Route.put('/empresa/avatar/logo', 'avataLogoController.update')
Route.get('/uploads/:file', 'avataLogoController.show')
