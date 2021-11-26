import Route from '@ioc:Adonis/Core/Route'

Route.get('/sicca/relatorio/:dataInicial/:dataFinal', 'SiccasController.index')