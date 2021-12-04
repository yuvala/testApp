import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function ParkLookupScreen({ route, navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Text> Parking spot Request</Text>
      <Button
        style={styles.btnRounded}
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        style={styles.btnRounded}
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 150,
            otherParam: '???',
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btnRounded: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ParkLookupScreen;
