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
import { Person } from './Person'
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

class People extends Component {
    render() {
        const { people } = this.props;
        debugger;
        // const { people, loading, refresh } = this.props;

            //   refreshControl={
            //     <RefreshControl
            //     refreshing={loading}
            //     onRefresh={refresh}
            // />
            // }
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

// function mapStateToProps(state) {
//     debugger;
//     return { 
//         people: state.people,
//      };
//   }

//   export default connect(mapStateToProps, { fetchPeople })(People);
  
//   export default connect(mapStateToProps, actions)(withRouter(People));