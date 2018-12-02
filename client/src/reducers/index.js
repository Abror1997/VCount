import { combineReducers } from 'redux';

import { login, register, auth } from './user';

const user = combineReducers({
	login,
	register,
	auth
});

export default combineReducers({
	user
});
