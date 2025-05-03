import React, { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { DarkTheme, DefaultTheme, NavigationContainer, useTheme } from '@react-navigation/native'
import Home from '../HomeData/Home'
import About from '../AboutData/About'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'


const Tab = createMaterialTopTabNavigator();
const Nav = () => {
    const [mode, setMode] = useState(false)
    const handelMode = () => {
        setMode(!mode)
    }
    return (
        <NavigationContainer theme={mode ? DarkTheme : DefaultTheme}>
            <View>
                <TouchableOpacity >
                    <Text style={styles.textBtn} onPress={handelMode}>{mode ? "Light Mode" : "Dark Mode"}</Text>
                </TouchableOpacity>
            </View>
            <Tab.Navigator >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name='About' component={About} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    textBtn: {
        textAlign: "center",
        backgroundColor: "green",
        margin: 10,
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10
    }
})

export default Nav
