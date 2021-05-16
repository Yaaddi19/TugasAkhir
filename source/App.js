import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {GetStarted, Splash } from './pages'

export default function App() {
  return (
    <View style={styles.container}>
      <GetStarted />
    </View>
    )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
  }
})
