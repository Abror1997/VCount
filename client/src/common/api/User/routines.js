import { createRoutine } from 'redux-saga-routines';

export default {
	register: createRoutine('REGISTER'),
	login: createRoutine('LOGIN'),
	auth: createRoutine('AUTH')
};
