import React, { Component } from 'react';
import { 
    ScrollView, 
    View,
    Text,
} from 'react-native';
import { people } from './fake-data';
import { Person } from './Person'

export default class People extends Component {
    render() {
        return (
            <View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                   {people.map((person, index) => <Text>{person.name}</Text>)}
                </ScrollView>
            </View>
        )
    }
}