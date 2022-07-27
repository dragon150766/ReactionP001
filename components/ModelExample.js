import { StyleSheet, Text, View, SafeAreaView, Button , Modal} from 'react-native'
import React, { useState } from 'react'


const ModelExample = () => {

    const [showModal,setShowModal] = useState(false);

  return (

    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Modal
             animationType={'slide'}
             transparent= {false}
             visible= {showModal}
             onRequestClose={() => alert('Model has been closed.')}
            >
                <View style={styles.modal}>

                    <Text style={styles.text}>Modal is Open!</Text>

                    <Button 
                     title='click to close modal'
                     onPress={() => setShowModal(!showModal)}
                     />

                </View>
            </Modal>

            {/* Updating the state to make model visible */}
            <Button 
                title='click to open model'
                onPress={() => setShowModal(!showModal)}
            />
        </View>
        
    </SafeAreaView>
  )
}

export default ModelExample

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        marginTop: 30,
    },
    modal: { 
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f0fff0',
        padding: 100,
    },
    text: {
        color: '#3f2949',
        marginTop: 10,
    }, 
})