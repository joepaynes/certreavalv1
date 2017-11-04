import history from '../history';

import {
    CREATE_CERT,
    FETCH_CERTS,
    AUTH_USER,
    AUTH_ERROR,
    UNAUTH_USER
} from './types';

//db = firebase.database() - access to Realtime Database, refer to docs
import {
    db,
    auth 
}  from '../firebase/firebase';

export function createCert(values) {
    return {
        type: CREATE_CERT,
        payload: values
    };
}

export function fetchCerts() {
    return function(dispatch) {
    const uid = auth.currentUser.uid;
    console.log(uid);
    const user = db.ref(`/certifictates/${uid}`);
    user.once("value")
        .then(snapshot => {
            const cert = snapshot.val();
            console.log(cert);
            dispatch({
                type: FETCH_CERTS,
                payload: cert
            })
        })
        .catch(err => {
            console.log("Error fetching certificates", err);
        });
    }
}

//Authentication Action Creators
export function signUpUser({ email, password }) {
    return function(dispatch) {
    //Submit email&password to server 
    auth.createUserWithEmailAndPassword(email, password)
        //If request is good...
        .then(response => {
            // - Update state to indicate user authenticated
            dispatch({ type: AUTH_USER });
            // - Redirect to a route '/feature' 
            history.push('/dashboard');
        })

        //If request is bad...
        .catch(error => {
        // - Show an error to the user
        dispatch(authError(error.code + ": " + error.message));
        });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}