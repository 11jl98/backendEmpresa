import Route from '@ioc:Adonis/Core/Route'

Route.get('/inventario/quantidade','InventarioestoquesController.index')
Route.get('/inventario/list','InventarioestoquesController.show')
Route.get('/inventario/list/:dataInit/:dataFinal','InventarioestoquesController.showDate')
