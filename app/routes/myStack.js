// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: 'park request', animationEnabled: true }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ title: 'park request', animationEnabled: true }}
        name="Details"
        component={ParkGrantScreen}
      />
      <Stack.Screen
        options={{ title: 'Park request', animationEnabled: true }}
        name="parkRequset"
        component={ParkLookupScreen}
      />
    </Stack.Navigator>
  );
}
