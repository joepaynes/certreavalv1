import { combineReducers } from 'redux';

//Reducers
import CertificateReducer from './reducer_certs'

const rootReducer = combineReducers({
    certificates: CertificateReducer
  });
  
  export default rootReducer;