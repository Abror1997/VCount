import types from './types';
import { removeToken } from '../../';

export default () => {
	removeToken();
	return {
		type: types.success,
		payload: {
			token: undefined
		}
	};
};
