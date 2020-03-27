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




export default class LaunchScreen extends Component {
   
    render() {
        const { flight_number,street } = this.props.route.params;
        console.log('Return something',this.props.route.params)
        return (
            <Fragment>
                <SafeAreaView/>
                <Text style={{color: "black"}}>Hello worlds  </Text>
                <Text>{street}</Text>

            </Fragment>
        )
    }
}
