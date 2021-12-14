import Route from '@ioc:Adonis/Core/Route'

Route.get('/configuracao', 'ConfiguracaosController.index')
Route.post('/configuracao', 'ConfiguracaosController.store')
Route.put('/configuracao/:id', 'ConfiguracaosController.update')
