import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalculatorScreen from './src/CalculatorScreen';
import { Text, StyleSheet, View, Image } from 'react-native';
import React, { Component } from 'react';

export default function App() { 
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="CalculatorScreen">
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
