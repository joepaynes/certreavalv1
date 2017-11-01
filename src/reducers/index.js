import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form'

//Reducers
import CertificateReducer from './reducer_certs'

const rootReducer = combineReducers({
    certificates: CertificateReducer,
    form: formReducer
  });
  
  export default rootReducer;