import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'

const TouchablePractice = () => {
    const onPress = (msg) => {
        alert('Alert for : '+msg);
    }
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            
            <TouchableOpacity
                style={styles.buttonFacebookStyle}
                activeOpacity = {0.5}
                onPress={() => onPress('Login Facebook')}
                >
                    <Image source={require('../PNG/facebook.png')}
                    style={styles.buttonImageIconStyle}
                    >
                       
                    </Image>
                    <View style={styles.buttonIconSeparatorStyle}></View>
                    <View style={styles.buttonTextStyle}>
                        <Text>Login Facebook</Text>
                    </View>
                    
                </TouchableOpacity>

        
        <TouchableOpacity
                style={styles.buttonGPlusStyle}
                activeOpacity = {0.5}
                onPress={() => onPress('Login Google')}
                >
                    <Image source={require('../PNG/google-plus.png')}
                    style={styles.buttonImageIconStyle}
                    >
                       
                    </Image>
                    <View style={styles.buttonIconSeparatorStyle}></View>
                    <View style={styles.buttonTextStyle}>
                        <Text>Login Google</Text>
                    </View>
                    
                </TouchableOpacity>
        </View>
            
        
    </SafeAreaView>
  )
}

export default TouchablePractice

const styles = StyleSheet.create({
    container: {
        flex: 1,
         margin: 10,
         marginTop: 30,
         padding: 30,
         },
         buttonGPlusStyle: {
         flexDirection: 'row',
         alignItems: 'center',
         backgroundColor: '#dc4e41',
         borderWidth: 0.5,
         borderColor: '#fff',
         height: 40,
         borderRadius: 5,
         margin: 5,
         },
         buttonFacebookStyle: {
         flexDirection: 'row',
         alignItems: 'center',
         backgroundColor: '#485a96',
         borderWidth: 0.5,
         borderColor: '#fff',
         height: 40,
         borderRadius: 5,
         margin: 5,
         },
        buttonImageIconStyle: {
         padding: 10,
         margin: 5,
         height: 25,
         width: 25,
         resizeMode: 'stretch',
         },
         buttonTextStyle: {
         color: '#fff',
         marginBottom: 4,
         marginLeft: 10,
         },
         buttonIconSeparatorStyle: {
         backgroundColor: '#fff',
         width: 1,
         height: 40,
         },
})