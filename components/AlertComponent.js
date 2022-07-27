import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'

const AlertComponent = () => {

    const simpleAlertHanler = () => { 
        alert('hello I am Simple Alert form JavaScript')
    }

    const twoOptionAlertHanler = () => {
        Alert.alert(
            //title
            'Hello',
            //body
            'I am two option from React Navtive',
            [
                {
                    text: 'Yes',
                    onPress: ()=> alert('Yes Pressed')
                },
                {
                    text: 'No',
                    onPress: ()=> alert('No Pressed'),
                    style: 'cancel'
                }
            ],
            { cancelable: false}
        )
    }
    
  return (
    <View style={styles.container}>
      <Button
      title='Simple Alert'
      onPress={simpleAlertHanler}
      />
      <Button
      title='2 Alert'
      onPress={twoOptionAlertHanler}
      />
    </View>
  )
}


export default AlertComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
})