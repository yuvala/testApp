import React from 'react';
import { Image, Button, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ViewImageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Button
          title="{navigation.pr {na}"
          onPress={() => navigation.navigate('Welcome')}
        />
      </View>
      <View style={styles.deleteIcon}></View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/image.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 150,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 20,
    left: 30,
  },
  container: {
    backgroundColor: colors.black, //'#000000',
    flex: 1,
  },
  deleteIcon: {
    width: 80,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 20,
    right: 30,
  },
  image: { width: '100%', height: '100%' },
});
export default ViewImageScreen;
