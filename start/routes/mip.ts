import Route from '@ioc:Adonis/Core/Route';

Route.post('/mip', 'MipsController.store')
Route.get('/mip', 'MipsController.index')