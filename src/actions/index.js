import {
    CREATE_CERT,
    FETCH_CERTS
} from './types';

import db  from '../firebase/firebase';

export function createCert(values) {
    return {
        type: CREATE_CERT,
        payload: values
    };
}

export function fetchCerts() {
    function writeUserData(name, email) {
        db.ref('certifictates/').set({
          username: name,
          email: email,
        });
    }
    
    writeUserData("ben", "payne123@email.com");

    return {
        type: FETCH_CERTS,
    };
}