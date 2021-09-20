import Route from '@ioc:Adonis/Core/Route'

Route.get('/responsavel/:texto/:filtro/:page', 'ResponsavelTecnicosController.index')
Route.get('/responsavel/:page', 'ResponsavelTecnicosController.indexInit')
Route.get('/responsavel/schema', 'ResponsavelTecnicosController.indexFindBySelect')
Route.get('/responsavel/:id', 'ResponsavelTecnicosController.show')
Route.post('/responsavel', 'ResponsavelTecnicosController.store')
Route.put('/responsavel', 'ResponsavelTecnicosController.update')
Route.delete('/responsavel', 'ResponsavelTecnicosController.destroy')
