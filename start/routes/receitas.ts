import Route from '@ioc:Adonis/Core/Route'

Route.get('/receitas', 'ReceitasController.index')
Route.get('/receitas/:id', 'ReceitasController.show')
Route.get('/receitas/:dataInit/:dataFinal', 'ReceitasController.showDate')
Route.post('/receitas', 'ReceitasController.store')
Route.put('/receitas/:id', 'ReceitasController.update')
Route.delete('/receitas/:id', 'ReceitasController.destroy')
