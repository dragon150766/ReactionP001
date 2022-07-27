import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import stySheet from './StySheet'

const Logo = () => {
  const textLogo = 'Thai-Nichi';
  const isTH = false;
  return (
    <View >
      <Text style={styles.TextLogo}>TNI</Text>
      <Text>{textLogo}</Text>
      {/* {
        isTH && <Text>ภาษาไทย</Text>
      } */}
      {/* use if/else or conditional operator */}
      {/* {
        isTH == true ? (<Text>ภาษาไทย</Text>):(<Text>English</Text>)
      } */}

    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
  TextLogo:{
    color: "blue",
    fontSize:40,
    
}
})                     