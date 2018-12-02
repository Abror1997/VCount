import user from './user';
import company from './company';

export default {
	user,
	company
};

export const getToken = () => localStorage.getItem('auth');
export const setToken = token => localStorage.setItem('auth', token);
export const removeToken = () => localStorage.removeItem('auth');
