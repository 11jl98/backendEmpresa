import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './user'
import './clientes'
import './estoque'
import './fornecedor'
import './infortercnica'
import './propriedade'
import './receitas'
import './responsavel'
import './inventario'
import './empresa'
import './retorno'
import './lote'
import './sicca'
Route.get('/', async () => {
  return { hello: 'world' }
})
