import { StyleSheet, Text, View, Button, Modal, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

const ModalPractice = () => {

    const [showModal,setShowModal] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor : 'black'}}>
        <View style={styles.centeredView}>
            <Modal
             animationType='fade'
             transparent= {false}
             visible= {showModal}
             onRequestClose= {() => alert('Light has been Open.')}
            >
                <View style={styles.modalView}>

                    <Text style={styles.modalText}>Ligth is Open!</Text>

                    <Button 
                     style={styles.button}
                     title='click to close '
                     onPress={() => setShowModal(!showModal)}
                     />

                </View>
            </Modal>

            <View >
                <Text style={styles.textStyle}>Ligth is Close</Text>
                <Button
                style={styles.button}
                title='Plese click to Open ligth'
                onPress={() => setShowModal(!showModal)}
                />
            </View>
        </View>

    </SafeAreaView>
  )
}

export default ModalPractice

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        },
        modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset:{
        width:0,
        height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation: 5,
        },
        button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        },
        buttonOpen:{
        backgroundColor:'#F194FF',
        },
        buttonClose:{
        backgroundColor:'#2196F3',
        },
        textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        },
        modalText: {
        marginBottom: 15,
        textAlign: 'center',
        },
})