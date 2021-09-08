import Route from '@ioc:Adonis/Core/Route'

Route.get('/propriedade/schema/:id', 'PropriedadesController.index')
Route.get('/propriedade/:id', 'PropriedadesController.show')
Route.post('/propriedade', 'PropriedadesController.store')
Route.put('/propriedade/:id', 'PropriedadesController.update')
Route.delete('/propriedade/:id', 'PropriedadesController.destroy')
