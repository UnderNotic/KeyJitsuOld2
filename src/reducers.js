import { combineReducers} from 'redux';
import mainReducer from 'containers/Main/indexDuck';

export default () => 
        combineReducers(
            {
                mainReducer
            }
        )
    ;