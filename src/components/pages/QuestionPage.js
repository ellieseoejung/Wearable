import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QuestionForm from '../forms/QuestionForm';
import firebase from '../../helpers/mymixtape';
import { Actions } from 'react-native-router-flux';


export default class QuestionPage extends Component {
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
            <View style={styles.wrapper}>
                <View style={{margin:128}}>
                    <Text>QuestionsPage</Text>
                    <Text>Wearable</Text>
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