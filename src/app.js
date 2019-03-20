import React, { Component } from 'react';
import {Navigator} from 'react-native-deprecated-custom-components' //TODO - update this later
import People from './People';

const RouteMapper = (route, navigator) => {
    if (route.name === 'people') {
        return <People navigator={navigator} />
    }
};

export default class App extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'people' }}
                configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
                renderScene={RouteMapper}
            />
        )
    }
}