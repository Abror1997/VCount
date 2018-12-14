import { call, put, takeEvery } from 'redux-saga/effects';

import Routines from '../routines';

function* trigger(api, action) {
	const { request } = action.payload;

	try {
		yield put(Routines.register.request());

		const response = yield call(api.user.register, request);

		yield put(
			Routines.register.success({
				request,
				response: response.data
			})
		);
	} catch (e) {
		yield put(Routines.register.failure(e));
	} finally {
		yield put(Routines.register.fulfill());
	}
}

export default function*(api) {
	yield takeEvery(Routines.register.TRIGGER, trigger, api);
}
