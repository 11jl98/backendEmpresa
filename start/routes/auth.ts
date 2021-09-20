/* eslint-disable eol-last */
import Route from '@ioc:Adonis/Core/Route'

Route.post('/auth', 'AuthController.store')
Route.delete('/auth', 'AuthController.destroy').middleware('auth')