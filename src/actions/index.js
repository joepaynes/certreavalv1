import {
    CREATE_CERT,
    FETCH_CERTS
} from './types';

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