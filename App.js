import * as React from 'react';
//import 'react-native-gesture-handler';
// import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import MaskedView from '@react-native-masked-view/masked-view';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import ParkGrantScreen from './app/screens/ParkGrantScreen';
import ParkLookupScreen from './app/screens/ParkLookupScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            title: 'park granting',
            animationEnabled: true,
          }}
          name="parkRequset"
          component={ParkLookupScreen}
          name="Details"
          component={ParkGrantScreen}
        />
        <Stack.Screen
          options={{
            title: 'park booking',
            animationEnabled: true,
          }}
          name="parkRequset"
          component={ParkLookupScreen}
        />
      </Stack.Navigator>
      {/* <MyStack></MyStack> */}
    </NavigationContainer>
  );
}
