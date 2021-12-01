import * as React from 'react';
import {
  Image,
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen </Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
      <Button
        title="request a praking spot"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('parkRequset', {
            itemId: 86,
            otherParam: 'Parking  here',
          });
        }}
      />
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
export default HomeScreen;
