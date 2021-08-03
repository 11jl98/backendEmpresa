/* eslint-disable eol-last */
import Route from '@ioc:Adonis/Core/Route'

Route.resource('/cliente', 'ClientesController').apiOnly()