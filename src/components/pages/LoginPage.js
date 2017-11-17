import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from '../forms/LoginForm';
import firebase from '../../helpers/mymixtape';
import { Actions } from 'react-native-router-flux';
export default class LoginPage extends Component {
    submit = (data) => {
        // alert(data.password);
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(user=>{
                Actions.homePage();
            })
            .catch(error=>{
                alert('Login failed');
            })
    }
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                <Image style={styles.logo}
                source={require('../../assets/icon.png')}
                />

                <Text style={styles.title}>Wearable</Text>
                <Text style={styles.title}>Powered by Team Six.</Text>
            </View>
            <LoginForm onSubmit={this.submit}/>
            </KeyboardAvoidingView>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    }
});