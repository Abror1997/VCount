import {combineReducers} from 'redux'

import {login, register, auth} from './user'

export default combineReducers({
  login,
  register,
  auth
})