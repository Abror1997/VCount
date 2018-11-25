import types from './types'

import axios from 'axios'

export default (data) => {
  
  return dispatch => {
    dispatch(() => {
      return {
        type: types.started
      }
    });

    axios.post('http://localhost:3001/api/user/register', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        dispatch(() => {
          return {
            type: types.success,
            payload: response.data
          }
        })
      })
      .catch(error => {
        return {
          type: types.failure,
          payload: {
            error
          }
        }
      })
  }  
}