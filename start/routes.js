'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.get('users', 'UserController.index')

Route.post('sessions', 'SessionController.store')
Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')



Route.group(() => {

  Route.post('files', 'FileController.store')
  Route.get('files/:id', 'FileController.show')

  Route.resource('viaturas', 'ViaturaController').apiOnly()
  Route.resource('jornadas', 'JornadaController').apiOnly()

  Route.post('requests', 'CarRequestController.store')

  Route.put('returns/:id', 'CarReturnController.update')
  Route.get('returns/:id', 'CarReturnController.show')


  Route.put('confirmrequests/:id', 'ConfirmCarRequestController.update')
  Route.put('confirmreturns/:id', 'ConfirmCarReturnController.update')

}).middleware(['auth'])
