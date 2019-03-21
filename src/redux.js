import { Platform } from 'react-native';
// import { FETCH_PEOPLE } from './types';

// export const fetchPeople = () => async dispatch => {
//     debugger;
//     const res = await fetch(`${API}/people.json`);
//     debugger;
//     dispatch({ type: FETCH_PEOPLE, payload: res.data });
//   };

export const apiMiddleware = store => next => action => {
    next(action);

    debugger;

    switch(action.type) {
        case 'GET_PERSON_DATA':
            store.dispatch({type: 'GET_PERSON_DATA_LOADING'});
            debugger;
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
            }
        case 'GET_PERSON_DATA_RECEIVED':
            return {
                people: action.data.people
            }
        case 'GET_PERSON_DATA_ERROR':
            return state;
        default:
            return state;
    }
}