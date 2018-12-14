import User from 'common/api/User/sagas';

export default function sagas(api) {
	return [User(api)];
}
