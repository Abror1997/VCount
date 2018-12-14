import TokenStorage from '../TokenStorage';

const staticsBaseURL = 'http://example.com';

const baseURL0 = 'http://localhost:3001/api/';
const baseURL1 = 'https://vcount.herokuapp.com/api/';

export default {
	staticsBaseURL,

	apisauce: {
		baseURL: baseURL0,

		headers: {
			Accept: 'application/json',
			'Cache-Control': 'no-cache',
			'Content-Type': 'application/json',
			auth:
				'eyJhbGciOiJIUzI1NiJ9.MQ.2jb-JF8MoV3BpBVab-AxS2SZH6KH_U9_OLER1EicnJ0'
		}
	}
};
