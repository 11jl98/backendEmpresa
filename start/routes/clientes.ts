/* eslint-disable eol-last */
import Route from '@ioc:Adonis/Core/Route'

Route.get('/cliente', 'ClientesController.index')
Route.get('/cliente/schema', 'ClientesController.indexFindByCliente')
Route.get('/cliente/:id', 'ClientesController.show')
Route.post('/cliente', 'ClientesController.store')
Route.put('/cliente', 'ClientesController.update')
Route.delete('/cliente', 'ClientesController.destroy')