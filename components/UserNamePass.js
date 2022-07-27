import { StyleSheet, Text, View, TextInput, Button,} from 'react-native'
import React,  {useState} from 'react'

const UserNamePass = () => {

    const [userName, setUserName] = useState('');
    const [mail, setMail] = useState('');

    const checkTextInput = () => {

        
      if(!userName.trim()){
        alert('Please Enter Name');
        return;
        }else if (!mail.trim()) {
            alert('Please Enter E-mail');
            return;
        } else{
            alert('Success');
            return;
        }

        
     
}
    
  return (
    <View>
    
      <TextInput
      value={userName}
      onChangeText = { (userName) => {setUserName(userName)}}
      style = {styles.textInputStyles}
      placeholder='Enter Name'
      />
      <TextInput 
      value={mail}
      onChangeText = { (mail) => {setMail(mail)}}
      style={styles.textInputStyles}
      placeholder='Enter E-mail'
      />
      <Button 
      title='SUBMIT'
      onPress={ () => checkTextInput()}
      />
    </View>
  )
}



export default UserNamePass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    textInputStyles: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    }
})