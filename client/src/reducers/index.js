import {combineReducers} from 'redux'

import {login, register} from './user'

export default combineReducers({
  login,
  register
})