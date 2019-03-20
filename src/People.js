import React, { Component } from 'react';
import { 
    ScrollView, 
    View,
    StyleSheet,
    Text,
} from 'react-native';
import { people } from './fake-data';
import { Person } from './Person'

export default class People extends Component {
    render() {
        return (
            <View style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        paddingLeft: 100,
    }
})