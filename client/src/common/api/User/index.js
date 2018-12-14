export default api => {
	return {
		register: data => {
			return api.post('user/register', data);
		},
		login: data => {
			return api.post('/user/login', data);
		},
		auth: () => {
			return api.get('/user/auth');
		}
	};
};
