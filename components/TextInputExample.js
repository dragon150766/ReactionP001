import { View, TextInput, Button } from 'react-native'
import React from 'react'

const TextInputExample = () => {
  return (
    <View style={{padding: 10,}}>
        <View 
        style={{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
            }}
        >
        <TextInput
        placeholder='Course Goal'
        style={{width:'85%',borderColor:'black',borderWidth:1,padding:10}}
        />
        <Button title='Give'/>

      </View>
    </View>
  )
}

export default TextInputExample