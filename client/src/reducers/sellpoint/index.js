import { combineReducers } from 'redux';

import get from './get';
import destroy from './destroy';

export default combineReducers({
	get,
	destroy
});
