import { combineReducers } from 'redux';
import threads from './reducers/threads';

export const reducers = combineReducers({
    threads,
});
