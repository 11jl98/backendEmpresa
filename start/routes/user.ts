/* eslint-disable eol-last */
import Route from '@ioc:Adonis/Core/Route'

Route.post('/user','UsersController.store').middleware('acl: admin')
Route.get('/user/:id','UsersController.show').middleware('acl: admin')
Route.delete('/user/id','UsersController.destroy').middleware('acl: admin')