import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Route from './route';

export default function App() {
  return (
    <NavigationContainer>
      <Route/>
    </NavigationContainer>
    )
}
