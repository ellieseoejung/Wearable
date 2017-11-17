import React, { Component } from 'react';
import ml-kmeans;
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';


export default class kmeans extends Component {
	render() {
		const kmeans = require('ml-kmeans');
		return (

 
			let data = [[1, 1, 1], [1, 2, 1], [-1, -1, -1], [-1, -1, -1.5]];
			let centers = [[1, 2, 1], [-1, -1, -1]];
 
			let ans = kmeans(data, 2, {initialization: centers});
			console.log(ans);
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
