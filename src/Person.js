import React, { Component, } from 'react';
import { PropTypes } from 'prop-types';
import {
    Dimensions, 
    Image,
    Text,
    View,
    Button,
    Modal, 
    TouchableHighlight,
    Alert,
} from 'react-native';
// import console = require('console');

export default class Person extends Component {
    state = {
        modalVisible: false
    }
            
    static propTypes = {
        person: PropTypes.object.isRequired,
    }
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }


    render() {
        const { person } = this.props;

        return (
            <View>
                <Text>{person.name}</Text>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>See More</Text>
                </TouchableHighlight>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        console.log('Modal closed')
                    }}>
                    <View style={{marginTop: 50}}>
                        <View>
                        <Text>{person.name}</Text>
                        <Text>Height: {person.height}</Text>
                        <Text>Eye Color: {person.eye_color}</Text>
                        <TouchableHighlight
                            onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                        </View>
                    </View>
                    </Modal>
            </View>
        )
    }
}

