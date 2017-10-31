import _ from 'lodash';

import {
    CREATE_CERT,
    FETCH_CERTS
} from '../actions/types';

const Posts = [
    { certificate: 'Basic Fire Fighting', type: 'Auxilliary', expiry: '20/10/18' },
    { certificate: 'Advanced Fire Fighting', type: 'Auxilliary', expiry: '26/08/22' },
    { certificate: 'Designated Security Duties', type: 'Auxilliary', expiry: '28/03/20' },
    { certificate: 'ENG1', type: 'Medical', expiry: '01/10/19' },
]

export default function(state = [], action) {
    switch (action.type) {
        case CREATE_CERT:
            return _.concat(Posts, action.payload);
        case FETCH_CERTS:
            return Posts;
        default:
            return state;
    }
}
