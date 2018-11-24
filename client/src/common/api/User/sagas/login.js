import { call, put, takeEvery } from 'redux-saga/effects'

import Routines from '../routines'

function * trigger (api) {
  try {
    yield put(Routines.login.request())
    const response = yield call(api.user.login)

    yield put(
      Routines.login.success({
        response: response.data
      })
    )
  } finally {
    yield put(Routines.login.fulfill())
  }
}

export default function * (api) {
  yield takeEvery(Routines.login.TRIGGER, trigger, api)
}