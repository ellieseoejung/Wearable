import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import Dimensions from 'Dimensions';

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
  	flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFC54',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9EEBFF',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffadc7',
  },
  text: {
    color: '#4c4846',
    fontSize: 30,
    fontWeight: 'bold',
  }
})


class App extends React.Component {
  render() {
    return (

	<Swiper style={styles.wrapper} showsButtons={false} loop={false} index={1} activeDotColor={'#4c4846'}>

        <View style={styles.slide1}>
          <Text style={styles.text}>The Left Page</Text>
        </View>

		<View style={styles.slide2}>
			<Text style={styles.text}>The Home Page</Text>
		</View>		
		
        <View style={styles.slide3}>
          <Text style={styles.text}>The Right Page</Text>
        </View>

      </Swiper>
    );
  }
}

Expo.registerRootComponent(App);
