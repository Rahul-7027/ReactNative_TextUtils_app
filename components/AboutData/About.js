import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const About = () => {
  return (
   <View>
    <Text style={styles.text}>About Screen</Text>
   </View>
  )
}

const styles=StyleSheet.create({
    text:{
        textAlign: "center",
        fontSize: 20,
        margin: 20,
        fontFamily:"italic"
    }
})

export default About
