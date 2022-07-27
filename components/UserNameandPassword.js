import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import React, {useState} from 'react'


const UserNameandPassword = () => {
    
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    
  

  return (
    <View style={{flex:1, marginTop:20, backgroundColor:'#7DA5', alignItems: 'center'}}>
      <Text style={{color: "red", marginTop: 5}}>Insert any text in below Input</Text>
      <TextInput 
        value={userName}
        onChangeText = { (userName) => {setUserName(userName)}}
        style ={styles.textinput}
        placeholder = 'E-mail'
      />
      <TextInput 
        value={pass}
        onChangeText = { (pass) => {setPass(pass)}}
        style ={styles.textinput}
        placeholder = 'Password'
      />


      <Button
        title='submit'
        onPress={ () => alert("Email: "+userName + "\nPassword: "+ pass)}
      />
     
    </View>
  )
}

export default UserNameandPassword

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
