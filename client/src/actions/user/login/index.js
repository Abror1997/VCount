import types from './types'

import axios from 'axios'

export default (data) => {

  return dispatch => {
    dispatch(started())

    axios.post('http://localhost:3001/api/user/login', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('response', response.data)
        if(response.data.isAuth)
          dispatch(success(response))
        else
          dispatch(failure(response.data))
      })
      .catch(error => {
        dispatch(failure(error))
      })
  }  
}

const started = () => ({
  type: types.started
})

const success = response => ({
  type: types.success,
  payload: response.data  
})

const failure = error => ({
  type: types.failure,
  payload: {
    error
  }
})