import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'

const renderInput = ({ input: { onChange, ...restInput }, ...otherProps}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} {...otherProps}/>
}

class QuestionForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <View style={styles.container}>
            <StatusBar>
            barStyle="light-content"
            </StatusBar>
            <text>Question</text>
            <Field
             placeholder="Feature1"
             placeholderTextColor="rgba(255,255,255,0.7)"
             style={styles.input}
             component={renderInput}
             />
            

             <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
                <Text style={styles.buttonText}>NEXT</Text>
             </TouchableOpacity>
            </View>
            );
    }
}

export default reduxForm({
    form: 'question'
})(QuestionForm);

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