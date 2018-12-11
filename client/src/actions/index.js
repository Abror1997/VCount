import user from './user';
import company from './company';
import sellpoint from './sellpoint';
// import device from './device';

export default {
	user,
	company,
	sellpoint
	// device
};

export const getToken = () => localStorage.getItem('auth');
export const setToken = token => localStorage.setItem('auth', token);
export const removeToken = () => localStorage.removeItem('auth');
