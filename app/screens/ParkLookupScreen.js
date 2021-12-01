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
      <Button
        style={styles.btnRounded}
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btnRounded: {
    backgroundColor: '#ff5050',
    borderRadius: 50,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ParkLookupScreen;
