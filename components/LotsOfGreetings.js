import { View, Text } from 'react-native'
import React from 'react'

const Greeting = ({fName1,lName1}) => {
    return(
        <View style={{ alignItem: 'center' , color: "red"}}>
            <text>You First Name is {fName1} and {lName1} </text>
        </View>
    )
}

const LotsOfGreetings = () => {
  return (
    <View style={{ alignItems: "center" , top: 50}}>
      <Greeting fName1='S'   lName1='A'/>
      <Greeting fName1='D'    lName1='B'/>
      <Greeting fName1='A' lName1='G'/>
    </View>
  )
}

export default LotsOfGreetings