import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form'

//Reducers
import CertificateReducer from './reducer_certs';
import AuthReducer from './auth_reducer';

const rootReducer = combineReducers({
    certificates: CertificateReducer,
    form: formReducer,
    auth: AuthReducer
  });
  
  export default rootReducer;