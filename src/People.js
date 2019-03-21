import React, { Component } from 'react';
import { 
    ScrollView, 
    View,
    StyleSheet,
    Text,
    ActivityIndicator, 
    RefreshControl,
} from 'react-native';
// import { people } from './fake-data'; // this was from the old data
import Person from './Person';
import { connect } from 'react-redux';
import { fetchPeople } from './redux';

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
        const {loading, refresh } = this.props;

        let {listOfPeople} = {};
        if (this.props.people) {
            listOfPeople = this.props.people.map(function(person, index) {
                return (
                    <View>
                        <Person key={index} person={person}/>
                    </View>
                )
            })
        }

        return (
            <View style={styles.container}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={loading}
                            onRefresh={refresh}
                        />
                    }
                >
               {listOfPeople}    
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

// function mapStateToProps(state) {
//     debugger;
//     return { 
//         people: state.people,
//      };
//   }

//   export default connect(mapStateToProps, { fetchPeople })(People);
  