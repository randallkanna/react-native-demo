import { Platform } from 'react-native';
// import { FETCH_PEOPLE } from './types';

const axios = require('axios');
// export const fetchPeople = () => async dispatch => {
//     const res = await fetch(`${API}/people.json`);
//     dispatch({ type: FETCH_PEOPLE, payload: res.data });
//   };

// const API = Platform.OS === 'ios'
//   ? 'http://10.0.3.2:3000/v1'
//   : 'http://localhost:3000/v1';

  const API = 'http://127.0.0.1:3000/v1';

export const apiMiddleware = store => next => action => {
    next(action);

    switch(action.type) {
        case 'GET_PERSON_DATA':
            store.dispatch({type: 'GET_PERSON_DATA_LOADING'});

            axios.get(`${API}/people.json`)
                .then(function(response) {
                    return response.data.people
                })
                .then(data => next({
                    type: 'GET_PERSON_DATA_RECEIVED',
                    data,
                }))  
        default:
                break;

    }
}

export const reducer = (state = {people: [], loading: true}, action) => {
    switch(action.type) {
        case 'GET_PERSON_DATA_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'GET_PERSON_DATA_RECEIVED':
            return {
                people: action.data,
                loading: false,
            }
        case 'GET_PERSON_DATA_ERROR':
            return state;
        default:
            return state;
    }
}