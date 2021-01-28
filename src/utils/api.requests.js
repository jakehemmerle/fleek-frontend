const { REACT_APP_BACKEND_URL, REACT_APP_JWT } = process.env;
const BEARER = `Bearer ${REACT_APP_JWT}`;


export const login = async (username, password) => {
    console.log(`LOGGING IN WITH ${username} and ${password}`)
    return fetch(`/login?username=${username}&password=${password}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
    }).then((res) => {
        // store JWT in state here
        console.log(res.body);
    }).catch(err => console.error(`incorrect login information: ${err}`));
}

export const fetchAllKeys = async () => {
    return fetch(`${REACT_APP_BACKEND_URL}/keys`, {
        headers: { 
          'Authorization': BEARER,
        }
    })
    .then(res => res.json());
}

export const generateNewKey = async () => {
    return fetch(`${REACT_APP_BACKEND_URL}/keys`, {
        method: 'POST',
        headers: { 
            'Authorization': BEARER,
        }
    })
    .then(res => res.json())
    .catch(err => console.error(`error in generateNewKey: ${err}`));
}

export const disableKey = async (keyId) => {
    return fetch(`${REACT_APP_BACKEND_URL}/keys/${keyId}`, {
        method: 'DELETE',
        headers: { 
            'Authorization': BEARER,
        }
    })
    .then(() => console.log('key deleted'))
    .catch(err => console.error(`error in deleting key: ${err}`));
}

export const fetchAllRequests = async () => {
    return fetch(`${REACT_APP_BACKEND_URL}/requests`, {
        headers: {
            'Authorization': BEARER,
        }
    })
    .then(res => res.json());
}