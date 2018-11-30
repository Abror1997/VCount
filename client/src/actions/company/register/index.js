import types from './types'

import axios from 'axios'

export default (data) => {
  
  return (dispatch) => {
    dispatch(started())
    
    const token = localStorage.getItem('token')

    axios.post('http://localhost:3001/api/company/register', data, {
      headers: {
        'Content-Type': 'application/json',
        'auth': token
      }
    })
      .then(response => {
        if(response.data.success)
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