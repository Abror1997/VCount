import login from './login';
import register from './register';
import auth from './auth';

import { combineReducers } from 'redux';

export default combineReducers({
	login,
	register,
	auth
});
