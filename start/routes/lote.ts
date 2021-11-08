import Route from '@ioc:Adonis/Core/Route';


Route.get('/lote/schema/:id', 'LotesController.index')
Route.get('/lote/:id', 'LotesController.show')
Route.post('/lote', 'LotesController.store')
Route.put('/lote/:id', 'LotesController.update')
Route.delete('/lote/:id', 'LotesController.destroy')