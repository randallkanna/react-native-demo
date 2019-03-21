import React, { Component } from 'react';
import {Navigator} from 'react-native-deprecated-custom-components' 
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware, reducer } from './redux';
import People from './People';
// import reduxThunk from 'redux-thunk';

const store = createStore(reducer, {}, applyMiddleware(apiMiddleware));
// const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

store.dispatch({type: 'GET_PERSON_DATA'});

const RouteMapper = (route, navigator) => {
  if (route.name === 'people') {
    return (
      <People navigator={navigator} />
    );
  }
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{ name: 'people' }}
          renderScene={RouteMapper}
        />
      </Provider>
    );
  }
}