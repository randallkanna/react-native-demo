import React, { Component } from 'react';
import { 
    ScrollView, 
    View,
    StyleSheet,
    Text,
    ActivityIndicator, 
    RefreshControl,
} from 'react-native';
import { people } from './fake-data';
import { Person } from './Person'
import { connect } from 'react-redux';

@connect(
    state => ({
        people: state.people,
        loading: state.loading,
    }),
    dispatch => ({
        refresh: () => dispatch({type: 'GET_PERSON_DATA'})
    }),
)

export default class People extends Component {
    render() {
        const { people } = this.props;

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