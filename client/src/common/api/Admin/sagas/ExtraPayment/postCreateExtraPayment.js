import { call, put, takeEvery } from 'redux-saga/effects'

import Routines from '../../routines'

function * trigger (api, action) {
  const { request } = action.payload

  try {
    yield put(Routines.postCreateExtraPayment.request())

    const response = yield call(api.admin.postCreateExtraPayment, request)

    yield put(
      Routines.postCreateExtraPayment.success({
        request,
        response: response.data
      })
    )
  } catch (e) {
    yield put(Routines.postCreateExtraPayment.failure(e))
  } finally {
    yield put(Routines.postCreateExtraPayment.fulfill())
  }
}

export default function * (api) {
  yield takeEvery(Routines.postCreateExtraPayment.TRIGGER, trigger, api)
}
