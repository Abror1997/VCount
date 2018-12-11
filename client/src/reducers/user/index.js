import { combineReducers } from 'redux';

import login from './login';
import register from './register';
import auth from './auth';

export default combineReducers({
	login,
	register,
	auth
});
