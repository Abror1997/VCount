import { combineReducers } from 'redux';

import user from './user';
import company from './company';
import sellpoint from './sellpoint';
import device from './device';

export default combineReducers({
	user,
	company,
	sellpoint,
	device
});
