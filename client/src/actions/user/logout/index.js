import types from './types';
import { removeToken } from '../../';

export default () => {
	removeToken();
	return {
		type: types.signout,
		payload: {
			token: undefined
		}
	};
};
