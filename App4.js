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
import TouchablePractice from './components/TouchablePractice'


const App = () => {
  return (
    <View >
      {/* <LotsOfGreetings/> */}
      {/* <Count/> */}
      {/* <InputText/> */}
      {/* <UserNamePass/> */}
      {/* <AlertComponent/> */}
      {/* <ImageWithTextInput/> */}
      {/* <ButtonExample/> */}
      <TouchablePractice/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  
  }

 
})


