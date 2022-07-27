import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './Logo'

const Styles = () => {
  return (
    <View style={[styles.container,styles.backgroud]} >
      <Text style={[styles.title,styles.warning]}>Hello React Native</Text>
      <Logo/>
    </View>
  )
}

export default Styles

const styles = StyleSheet.create({
    container :{
     flex :1,
     justifyContent :'center',
     alignItems :'center'
    },
    title :{
      fontSize:20
    },
    warning :{
      color: 'red'
    },
    backgroud :{
     backgroundColor: '#C6FFDD',
     
     
    }
 
  })