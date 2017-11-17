import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'

const renderInput = ({ input: { onChange, ...restInput }, ...otherProps}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} {...otherProps}/>
}

class RegisterForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <View style={styles.container}>
            <StatusBar>
            barStyle="light-content"
            </StatusBar>
            <Field
             placeholder="E-Mail"
             placeholderTextColor="rgba(255,255,255,0.7)"
             returnKeyType="next"
             onSubmitEditing={() => this.passwordInput.focus()}
             keyboardType="email-address"
             autoCapitalize="none"
             name="email"
             autoCorrect={false}
             style={styles.input}
             component={renderInput}
             />
             <Field
             placeholder="Password"
             placeholderTextColor="rgba(255,255,255,0.7)"
             returnKeyType="go"
             secureTextEntry
             name="password"
             style={styles.input}
             component={renderInput}
             />

             <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
                <Text style={styles.buttonText}>REGISTER</Text>
             </TouchableOpacity>
            </View>
            );
    }
}

export default reduxForm({
    form: 'register'
})(RegisterForm);

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
},
buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
}
});