import React, { Component,Fragment } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
  } from 'react-native';
import { thisExpression } from '@babel/types';

  

const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
        launches(first: 10){
            flight_number
            mission_name
            launch_success
            launch_date_local
        }
        users {
        id
        name
        user_name
        email
        address{
          street
          suite
          city
          geo{
              lat
              lng
          }
        }
      }
    }
`;


export default class Launches extends Component {

    constructor(properties) {
        super(properties);
        this.state = {
        }
    }

    render() {
       
        return (
            <View style={styles.container}>
                <SafeAreaView/>
                <Text style={styles.launchesText}>Launches</Text>
                <ScrollView >
                <Query query={LAUNCHES_QUERY}  >
                    {
                         ({loading, error, data}) => {
                            if(loading) return <Text style={{color: '#FF4701'}}>Loading...</Text>
                            if(error) console.log(error)

                            console.log(`return data ${data}`)

                            return <Fragment>
                                {
                                   data.launches.map((launch, index, ) => (
                                            <View>      
                                                <LaunchItem key={index} launch={launch} user={data.users[index]} navigation={this.props.navigation} />
                                            </View>
                                        ))
                                }
                            </Fragment>
                        }
                    }
                </Query>
                 <SafeAreaView/>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#252A2D'
    },
    launchesText: {
        alignSelf: 'center',
        color: '#FF4701',
        fontSize: 18,
        fontWeight: 'bold'
    }
})


