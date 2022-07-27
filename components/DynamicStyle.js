import { StyleSheet, Text, View, Button,SafeAreaView } from 'react-native'
import React, { useState } from 'react'

const DynamicStyle = () => {
    const[defaultStyle, setDefaultStyle] = useState(true);

  return (
    <SafeAreaView style={{flex:1}}>

        <View style={styles.container}>
            <Text
             style={defaultStyle? styles.style1: styles.style2}
            >
                About React Native
            </Text>
        </View>

        <Button 
        title='Change default style'
        onPress={() => setDefaultStyle(!defaultStyle)}
        />

    </SafeAreaView>
    
  )
}

export default DynamicStyle

const styles = StyleSheet.create({

    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        margin: 10
    },
    style1: {
        color: '#3f2949', 
         marginTop: 10
    },
    style2: {
        color: '#3da', 
         marginTop: 10
    }
})