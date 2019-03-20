import { Platform } from 'react-native';

export const apiMiddleware = store => next => action => {
    next(action);

    switch(action.type) {
        case 'GET_PERSON_DATA':
            store.dispatch({type: 'GET_PERSON_DATA_LOADING'});

            fetch(`${API}/people.json`)
                .then(response => response.json())
                .then(data => next({
                    type: 'GET_PERSON_DATA_RECEIVED',
                    data
                }))
                .catch(error => next({
                    type: 'GET_PERSON_DATA_ERROR',
                    error
                }));
                break;
                
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
                loading: false, 
                people: action.data.people
            }
        case 'GET_PERSON_DATA_ERROR':
            return state;
        default:
            return state;
    }
}