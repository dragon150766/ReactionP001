import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const App = () => {
  const showMe = () => {
    alert("Hello")
  }
  return (
    <View style={styles.container} >
      <Text>Button Example</Text>
      <Button
      onPress={showMe}
      title='Click Mes'
      color={'red'}
      />

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
  flex:1,
  alignItems: 'center',
  justifyContent: 'center'
  }
})


