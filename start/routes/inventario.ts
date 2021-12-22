import Route from '@ioc:Adonis/Core/Route'

Route.get('/inventario/relatorio/gerar/:filtro/:texto/:dataInicial/:dataFinal','InventarioestoquesController.indexBuscarDadosEstoquePorData')
Route.get('/inventario/relatorio/gerar/:filtro/:texto/','InventarioestoquesController.indexBuscarDadosEstoque')
Route.get('/inventario/quantidade/lote','InventarioestoquesController.indexLote')
Route.get('/inventario/list','InventarioestoquesController.show')
Route.get('/inventario/list/:dataInit/:dataFinal','InventarioestoquesController.showDate')
Route.post('/inventario/:page','MovimentaestoquesController.indexInventario')
