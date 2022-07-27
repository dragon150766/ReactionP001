import { StyleSheet, Text, View, Button,SafeAreaView } from 'react-native'
import React from 'react'

const Separator = () => (
    <View styles={styles.separator} />
)
const ButtonExample = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.title}>
                The title and onPress handler are required.It is recommended to set   accessigilityLabel to thelp make your app usable by everyone.
            </Text>
            <Button
            title='Press Me'
            onPress={ () => alert('simple Button press')}
            />
        </View>
        <Separator/>
        <View style={styles.container}>
            <Text style={styles.title}>
                The title and onPress handler are required.It is recommended to set   accessigilityLabel to thelp make your app usable by everyone.
            </Text>
            <Button
            title='Press Me'
            onPress={ () => alert('simple Button press')}
            color="#f194ff"
            />
        </View>
        <Separator/>
        <View style={styles.container}>
            <Text style={styles.title}>
                The title and onPress handler are required.It is recommended to set   accessigilityLabel to thelp make your app usable by everyone.
            </Text>
            <Button
            title='Press Me'
            onPress={ () => alert('simple Button press')}
            color= "#ffff1"
            />
        </View>
        <Separator/>
        <View style={styles.fixToText}>
        <View style={styles.container}>
            <Text style={styles.title}>
                The title and onPress handler are required.It is recommended to set   accessigilityLabel to thelp make your app usable by everyone.
            </Text>
            <Button
            title='Left Button'
            onPress={ () => alert('Left Button press')}
            
            />
        </View>
        <Separator/>
        <View style={styles.container}>
            <Text style={styles.title}>
                The title and onPress handler are required.It is recommended to set   accessigilityLabel to thelp make your app usable by everyone.
            </Text>
            <Button
            title='Right Button'
            onPress={ () => alert('Right Button press')}
            
            />
        </View>
        <Separator/>
        </View>
    </SafeAreaView>
  )
}

export default ButtonExample

const styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: 'center',
         marginHorizontal: 16,
         },
         title: {
         textAlign: 'center',
         marginVertical: 8,
         },
         fixToText: {
         flexDirection: 'row',
         justifyContent: 'space-between',
         },
         separator: {
         marginVertical: 8,
         borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
         },
       
})