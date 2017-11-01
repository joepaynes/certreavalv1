import {
    CREATE_CERT,
    FETCH_CERTS
} from './types';

//db = firebase.database() - access to Realtime Database, refer to docs
import db  from '../firebase/firebase';

export function createCert(values) {
    return {
        type: CREATE_CERT,
        payload: values
    };
}

export function fetchCerts() {
    return {
        type: FETCH_CERTS,
    };
}