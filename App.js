import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './Splash';
import Login from './Login';
export default class App extends React.Component {
  render() {
    return (
      <Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
