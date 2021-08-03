import Route from '@ioc:Adonis/Core/Route'

Route.resource('/estoque', 'MovimentaestoquesController').apiOnly()
