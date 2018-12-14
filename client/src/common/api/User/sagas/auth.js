import { call, put, takeEvery } from 'redux-saga/effects';

import Routines from '../routines';
// import TokenStorage from 'common/TokenStorage';

function* trigger(api, action) {
	const { request } = action.payload;

	try {
		yield put(Routines.auth.request());

		// const currentToken = yield call(TokenStorage.get);

		// yield call(api.setToken, currentToken);

		const response = yield call(api.user.auth, request);

		yield put(
			Routines.auth.success({
				request,
				response: response.data
			})
		);
	} catch (e) {
		yield put(Routines.auth.failure(e));
	} finally {
		yield put(Routines.auth.fulfill());
	}
}

export default function*(api) {
	yield takeEvery(Routines.login.TRIGGER, trigger, api);
}
