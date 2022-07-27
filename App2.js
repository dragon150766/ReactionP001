import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'

const App = () => {
  return (
    <View style={styles.container}>
      <Logo/>
      <User/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
  flex:1,
  alignItems: 'center',
  justifyContent: 'center'
  },

 
})


