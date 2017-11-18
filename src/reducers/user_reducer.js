import {
    LOG_USER,
    LOGOUT_USER
} from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case LOG_USER:
            return {...state, 
                displayName: action.payload.displayName, 
                email: action.payload.email, 
                photoURL: action.payload.photoURL
            };
        case LOGOUT_USER:
            return {...state,
                displayName: null, 
                email: null, 
                photoURL: null
            };
        default: 
            return state;
    }
}