import Route from '@ioc:Adonis/Core/Route'

Route.resource('/empresa', 'EmpresasController').apiOnly()