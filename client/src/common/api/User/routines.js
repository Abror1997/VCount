import { createRoutine } from 'redux-saga-routines/dist'

export default {

  login: createRoutine('USER_LOGIN'),
  register: createRoutine('USER_REGISTER')
}
