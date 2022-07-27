import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import React, {useState} from 'react'


const InputText = () => {
    
    const [userName, setUserName] = useState('');

  return (
    <View style={{flex:1, marginTop:20, backgroundColor:'#7DA5', alignItems: 'center'}}>
      <Text>Insert any text in below Input</Text>
      <TextInput 
        value={userName}
        onChangeText = { (userName) => {setUserName(userName)}}
        style ={styles.textinput}
        placeholder = ' Please input Text'
      />
      <Text>{userName}</Text>
     
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
    textinput :{
    width : 250,
    height : 45,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'

    }
})
