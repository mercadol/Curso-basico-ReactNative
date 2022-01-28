import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Saludar from './src/components/Saludar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Curso de React Native</Text>
      <Saludar />
      <Saludar firstname="Leonardo Mercado"/>
      <Saludar lastname="Jairo Alexander"/>
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
