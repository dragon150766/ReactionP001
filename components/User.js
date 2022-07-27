import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const User = () => {
    const users = [
        {id:1,name:"Steven"},
        {id:2,name:"Mark"}
    ];
  return (
    <View >
      <Text></Text>
      {
        users.map((user,index)=>{
            return <Text style={styles.title} key={user.id}> {index+1}. {user.name}</Text>
        })
      }
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  title :{
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#64dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
 
})