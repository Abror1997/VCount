import types from './types';
import axios from 'axios';
import { removeToken } from '../../';
import { type } from 'os';

export default () => {
	removeToken();
	return {
		type: types.success
	};
};
