import { combineReducers } from 'redux';
import test from './test'
import table from 'views/TableList/reducer'
export default combineReducers({
    test,
    table
})