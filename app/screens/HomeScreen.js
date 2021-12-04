import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

function HomeScreen({ navigation }) {
  const onPress = (v) =>
    navigation.navigate(v, {
      itemId: 86,
      otherParam: 'Parking  here',
    });
  return (
    <View style={styles.aContainer}>
      <TouchableOpacity
        style={styles.roundedBtn}
        onPress={() => onPress('Details')}
      >
        <Text>park granting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.roundedBtn}
        onPress={() => onPress('parkRequset')}
      >
        <Text>park booking</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  aContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  roundedBtn: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
});
export default HomeScreen;
