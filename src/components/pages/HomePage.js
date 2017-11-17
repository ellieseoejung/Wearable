import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class HomePage extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <Text style={{margin:128}}>You are now logged in</Text>
                    <View style={{margin:128}}>
                        <Text onPress={Actions.questionPage}>QUESTION</Text>
                    </View>
                </KeyboardAvoidingView>
            </View>
            );
    }
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