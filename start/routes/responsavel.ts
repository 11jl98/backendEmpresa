import Route from '@ioc:Adonis/Core/Route'

Route.get('/responsavel/:texto/:filtro/:page', 'ResponsavelTecnicosController.index')
Route.get('/responsavel/:page', 'ResponsavelTecnicosController.indexInit')
Route.get('/responsavel', 'ResponsavelTecnicosController.indexFindBySelect')
Route.get('/responsavel/schema/:id', 'ResponsavelTecnicosController.show')
Route.post('/responsavel', 'ResponsavelTecnicosController.store')
Route.put('/responsavel/:id', 'ResponsavelTecnicosController.update')
Route.delete('/responsavel/:id', 'ResponsavelTecnicosController.destroy')
