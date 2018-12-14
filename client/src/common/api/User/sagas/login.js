import { call, put, takeEvery } from 'redux-saga/effects';

import Routines from '../routines';
// import TokenStorage from 'common/TokenStorage';

function* trigger(api, action) {
	const { request } = action.payload;
	try {
		yield put(Routines.login.request());

		const response = yield call(api.user.login, request);

		// yield call(TokenStorage.set, response.data.token);
		yield put(
			Routines.login.success({
				request,
				response: response.data
			})
		);
	} catch (e) {
		yield put(Routines.login.failure(e));
	} finally {
		yield put(Routines.login.fulfill());
	}
}

export default function*(api) {
	yield takeEvery(Routines.login.TRIGGER, trigger, api);
}
