// App.js
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BluetoothManager from './BluetoothManager'; // Update the path accordingly

export default function App() {
  useEffect(() => {
    // Call BluetoothManager when the component mounts
    BluetoothManager();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});