import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class SplashPage extends Component {
    render() {
        return (

            <View style={styles.wrapper}>

                <View style={{margin:128}}>
                    <Text>Wearable</Text>
                </View>
                <View style={{margin:128}}>
                    <Text onPress={Actions.loginPage}>LOGIN</Text>
                </View>
                <View style={{margin:128}}>
                    <Text onPress={Actions.registerPage}>REGISTER</Text>
                </View>

                <View>
                    <Text style={styles.subtitle}>Powered by Team Six</Text>
                </View>

            </View>
        );

    }
    //Actions.loginPage();
}


const styles = StyleSheet.create({ 
    wrapper: {  
        backgroundColor: '#3498db', 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }, 
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'white',
        fontWeight: '200',
        paddingBottom: 20
    },
    titleWrapper: {
        justifyContent: 'center',
        flex: 1
    }
});