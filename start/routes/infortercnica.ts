import Route from '@ioc:Adonis/Core/Route'

Route.get('/infortecnica/:id', 'InfortecnicasController.show')
Route.get('/infortecnica/:idInfo/:idAgrotoxico', 'InfortecnicasController.index')
Route.get('/infortecnica/grafico/:dataInit/:dataFinal', 'InfortecnicasController.getReceitasAgrot')
Route.post('/infortecnica', 'InfortecnicasController.store')
Route.put('/infortecnica/:id', 'InfortecnicasController.update')
Route.delete('/infortecnica/:id', 'InfortecnicasController.destroy')
