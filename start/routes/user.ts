/* eslint-disable eol-last */
import Route from '@ioc:Adonis/Core/Route'

Route.post('/user','UsersController.store')
Route.get('/user/:id','UsersController.show')
Route.delete('/user/id','UsersController.destroy')