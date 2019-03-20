import React, { Component, } from 'react';
import { PropTypes } from 'prop-types';
import {
    Dimensions, 
    Image,
    Text,
    View,
} from 'react-native';

export default class Person extends Component {
    static propTypes = {
        person: PropTypes.object.isRequired,
    }

    render() {
        const { person } = this.props;

        return (
            <Text>{person}</Text>
        )
    }
}

