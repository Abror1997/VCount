import register from './register';
import login from './login';
import auth from './auth';

export default function sagas(api) {
	return [register(api), login(api), auth(api)];
}
