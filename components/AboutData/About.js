import { useTheme } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const About = () => {
  const {colors}=useTheme()
  return (
   <View style={{backgroundColor:colors.background}}>
    <Text style={[styles.text,{color:colors.text}]}>About Screen</Text>
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
