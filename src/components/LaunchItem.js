import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Button
  } from 'react-native';
import Moment from 'react-moment'
import moment from "moment";

export default function LaunchItem({
    navigation,
    launch: {flight_number, mission_name,launch_success,launch_date_local},
    user: { id,name,user_name,email,address:{street,suite,city, geo:{lat,lng}} }}) {

    const date = moment(launch_date_local).format("YYYY-MM-DD HH:mm")

    console.log('this',mission_name)
    return (
            <View style={styles.container}>
                <Text style={styles.launchDetails}>Pilot name: <Text style={styles.launchDetailsValue}>{name}</Text></Text>
                <Text style={styles.launchDetails}>Flight number: <Text style={styles.launchDetailsValue}>{flight_number}</Text></Text>
                <Text style={styles.launchDetails}>Mission Name: <Text style={launch_success ? {color:'#1dd10d'} : {color:'red'}}>{mission_name}</Text></Text>
                <Text style={styles.launchDetailsValue}>{date}</Text>
                <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('LaunchScreen',{
                    flight_number:flight_number,
                    mission_name: mission_name,
                    launch_success:launch_success,
                    launch_date_local:launch_date_local,
                    id: id,
                    name: name,
                    user_name: user_name,
                    street: street,
                    user_name:user_name,
                    email:email,
                    street: street,
                    suite: suite,
                    city: city,
                })}>
                    <Text style={styles.detailsText}>Details</Text>
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 5,
        padding: 5,
        backgroundColor: '#4f4f4f',
        borderWidth: 0,
        borderColor: '#FF4701',
        borderRadius: 10
    },
    launchDetails:{
        fontSize: 15
    },
    detailsButton: {
        width: 60,
        borderWidth: 1,
        borderColor: '#FF4701', 
        borderRadius: 8,
        marginTop: 5,
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    detailsText:{
        alignSelf: 'center',
        color: '#FF4701', 
        color: '#FF4701',
        fontSize: 15
    },
    launchDetailsValue: {
        color: '#A7ADc2'
    }
})
