import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Saludar from './src/components/Saludar';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Text>Curso de React Native</Text>
        <Saludar firstname="Leonardo Mercado"/>
        <Saludar lastname="Jairo Alexander"/>
      </NavigationContainer>
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
