import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LotsOfGreetings from './components/LotsOfGreetings'
import Count from './components/Count'
import InputText from './components/InputText'
import UserNameandPassword from './components/UserNameandPassword'
import UserNamePass from './components/UserNamePass'
import AlertComponent from './components/AlertComponent'
import ImageWithTextInput from './components/ImageWithTextInput'
import ButtonExample from './components/ButtonExample'
import Touchable_Example from './components/Touchable_Example'


const App = () => {
  return (
    <View style= {styles.container}>
      {/* <LotsOfGreetings/> */}
      {/* <Count/> */}
      {/* <InputText/> */}
      {/* <UserNamePass/> */}
      {/* <AlertComponent/> */}
      {/* <ImageWithTextInput/> */}
      {/* <ButtonExample/> */}
      <Touchable_Example/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#4DDA'
  }

 
})


