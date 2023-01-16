
import { combineReducers } from 'redux'
import loginReducer from './loginReducer';
import bankReducer from './reducer'
const reducers = combineReducers({
    bank: bankReducer,
    login: loginReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>