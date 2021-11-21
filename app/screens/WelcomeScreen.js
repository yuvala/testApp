import React from 'react';
import {
  Image,
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.aContainer}>
      <Button title="Go to View" onPress={() => navigation.navigate('View')} />
      <ImageBackground
        style={styles.background}
        source={require('../assets/view.jpg')}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/icon.png')} />
          <Text>title text ssssss sssss here</Text>
        </View>

        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
        {/* <Image source={require('../assets/icon.png')} /> */}
        {/* <View style={styles.loginButton}>sss</View>
      <View style={styles.registerButton}>sss</View> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  aContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fecd65',
  },
  logo: {
    width: 70,
    height: 70,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
});

export default WelcomeScreen;
