import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form'

//Reducers
import AuthReducer from './auth_reducer';
import UserReducer from './user_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth: AuthReducer,
    user: UserReducer
  });
  
  export default rootReducer;