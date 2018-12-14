// import { TokenGetException } from './Exception';

// export { TokenGetException };

export default {
	get: () => {
		return localStorage.getItem('token');
	},
	set: value => {
		return localStorage.setItem('token', value);
	}
};
