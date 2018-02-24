import {createStore} from 'redux';
import createReducer from './reducers';

export default function configureStore(){
    const reducers = createReducer();
    return createStore(reducers);
}