import Route from '@ioc:Adonis/Core/Route';


Route.post('/mensagem', 'MensagensController.store')
Route.get('/mensagem', 'MensagensController.index')
Route.get('/mensagem/:page', 'MensagensController.paginateMensagens')
