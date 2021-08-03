import Route from '@ioc:Adonis/Core/Route'

Route.resource('/receitas', 'ReceitasController').apiOnly()
