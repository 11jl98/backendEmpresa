/* eslint-disable eol-last */
import Route from '@ioc:Adonis/Core/Route'

Route.get('/cliente/:texto/:filtro/:page', 'ClientesController.index')
Route.get('/cliente/:page', 'ClientesController.indexInit')
Route.get('/cliente/schema', 'ClientesController.indexFindByCliente')
Route.get('/cliente/:id', 'ClientesController.show')
Route.post('/cliente', 'ClientesController.store')
Route.put('/cliente/:id', 'ClientesController.update')
Route.delete('/cliente/:id', 'ClientesController.destroy')