import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    ATTEMPT_AUTH
} from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case AUTH_USER:
            return {...state, currently: "User authenticated", authenticated: true, uid: action.payload, error:'' };
        case UNAUTH_USER:
            return {...state, currently: "User unauthenticated", authenticated: false, uid: null};
        case AUTH_ERROR:
            return {...state, error: action.payload};
        case ATTEMPT_AUTH:
            return {...state, currently: "Attempting authentication"}
        default: 
            return state;
    }
}