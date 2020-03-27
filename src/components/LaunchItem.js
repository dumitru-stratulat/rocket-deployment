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
    user: { id,name,user_name,email,address:{street} }}) {

    const date = moment(launch_date_local).format("YYYY-MM-DD HH:mm")

    console.log('this',mission_name)
    return (
        <View>
            <View style={{margin: 3,backgroundColor: 'gray',borderWidth: 2,borderColor: 'black', borderRadius: 5}}>
                <Text>Pilot name {name}</Text>
                <Text>Flight number: {flight_number}</Text>
                <Text style={launch_success ? {color:'green'} : {color:'red'}}>Mission Name: {mission_name}</Text>
                <Text >{date}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('LaunchScreen',{
                    flight_number:flight_number,
                    mission_name: mission_name,
                    launch_success:launch_success,
                    launch_date_local:launch_date_local,
                    street: street,
                    user_name:user_name,
                    email:email
                })}>
                     <Text>Details </Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}
