import history from '../history';

import {
    AUTH_USER,
    AUTH_ERROR,
    UNAUTH_USER,
    ATTEMPT_AUTH,
    LOG_USER,
    LOGOUT_USER
} from './types';

//db = firebase.database() - access to Realtime Database, refer to docs
import {
    db,
    auth,
    providerFB 
}  from '../firebase/firebase';

//Authentication Action Creators
//******************************

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
            //Create instance for User in Certification DB
            const uid = response.uid;
            db.ref(`/certificates/${uid}/settings`).set({
                termsAndConditions: true,
                userCreated: `${Date.now()}`
            });
        })

        //If request is bad...
        .catch(error => {
        // - Show an error to the user
        console.log(error.code + ": " + error.message)
        dispatch(authError(error.code + ": " + error.message));
        });
    }
}

export function signInUser({ email, password}) {
    return function(dispatch) {
    dispatch({ type: ATTEMPT_AUTH })
    //Submit email&password to server
    auth.signInWithEmailAndPassword(email, password)
        //Good request
        .then(response => {
            const uid = auth.currentUser.uid;
            console.log("signInUser dispatch fired");
            // - Update state to indicate user authenticated
            // ***************** REMOVE PERHAPS AS LISTENER DEALS WITH THIS AUTH CHANGE ****** //
            // At the moment removing causes user to be rerouted to dashboard - listener may not be working.
            dispatch({ type: AUTH_USER, payload: uid });
            // - Redirect to a route '/feature' 
            setTimeout(history.push('/dashboard'), 300);
        })
        //If request is bad...
        .catch(error => {
            // - Show an error to the user
            console.log(error.code + ": " + error.message)
            dispatch(authError(error.code + ": " + error.message));
        });
    }
}

//Used with Firebase Authentication
export function handleFB() {
    return function(dispatch) {
        dispatch({ type: ATTEMPT_AUTH })
        //Start FB login flow
        auth.signInWithPopup(providerFB)
            //Good Response
            .then(result => {   
                dispatch({ type: AUTH_USER, payload: result.user.uid });
                dispatch({ type: LOG_USER, payload: result.user });
                history.push('/dashboard');
            })
            .catch(error => {
                // - Show an error to the user
                console.log(error.code + ": " + error.message)
                dispatch(authError(error.code + ": " + error.message));
            })
    }
}


export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function signOutUser() {
    return function(dispatch) {
        auth.signOut()
            .then(res => {
                dispatch({ type: UNAUTH_USER });
                dispatch({ type: LOGOUT_USER });
            })
            .catch(error => {
                console.log("Could not sign out user: ", error);
                dispatch(authError(error.code + ": " + error.message));
            })
    }
}

//Start listening for Auth Changes
export function authListening() {
    return function(dispatch) {
        auth.onAuthStateChanged(user => {
            if(user) {
                const uid = user.uid
                dispatch({
                    type: AUTH_USER,
                    payload: uid
                });
                dispatch({
                    type: LOG_USER,
                    payload: user
                });
            } else {
                dispatch({
                    type: UNAUTH_USER
                });
                dispatch({
                    type: LOGOUT_USER
                });
            }
        });
    }
}
