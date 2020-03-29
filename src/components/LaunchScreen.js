import React, { Component,Fragment } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import moment from "moment";




export default class LaunchScreen extends Component {
   
    render() {
        const { flight_number,
                mission_name,
                launch_success,
                launch_date_local,
                id,
                name,
                user_name,
                email,
                street,
                suite,
                city
              } = this.props.route.params;
        console.log('Return something',this.props.route.params)
        const date = moment(launch_date_local).format("YYYY-MM-DD HH:mm")

        return (
            <View style={styles.container}>
                <SafeAreaView/>
                <View style={styles.launchesDetailsContainer}>
                    <Text style={styles.launchDetails}>Flight number: <Text style={styles.launchDetailsValue}>{flight_number}</Text></Text>
                    <Text style={styles.launchDetails}>Mission Name: <Text style={launch_success ? {color:'#1dd10d'} : {color:'red'}}>{mission_name}</Text></Text>
                    <Text style={styles.launchDetailsValue}>{date}</Text>
                    <Text style={styles.launchDetails}>Pilot name: <Text style={styles.launchDetailsValue}>{name}</Text></Text>
                    <Text style={styles.launchDetails}>Pilot id: <Text style={styles.launchDetailsValue}>{id}</Text></Text>
                    <Text style={styles.launchDetails}>Email: <Text style={styles.launchDetailsValue}>{email}</Text></Text>
                    <Text style={styles.launchDetails}>City: <Text style={styles.launchDetailsValue}>{city}</Text></Text>
                    <Text style={styles.launchDetails}>Street name: <Text style={styles.launchDetailsValue}>{street}</Text></Text>
                    <Text style={styles.launchDetails}>Suite: <Text style={styles.launchDetailsValue}>{suite}</Text></Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#252A2D'
    },
    launchesDetailsContainer: {
        margin: 5,
        padding: 5,
        backgroundColor: '#4f4f4f',
        borderWidth: 0,
        borderColor: '#FF4701',
        borderRadius: 10
    },
    launchDetailsValue: {
        color: '#A7ADc2'
    }

})