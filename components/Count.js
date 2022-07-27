import { View, Text, Button, StyleSheet } from 'react-native'
import React ,{useState} from 'react'

const Count = () => {

    const [count,setCount] = useState(0);

  return (
    <View>
      <Text style={styles.center}>{count}</Text>
      <Button
      title='Click To Plus'
      onPress={ () => setCount(count+1)}
      />
      <Button
      title='Click To Drop'
      onPress={ () => setCount(count-1)}
      />
    </View>
  )
}

export default Count

const styles = StyleSheet.create({
    center:{
    textAlign: "center"
    
    }
  
   
  })