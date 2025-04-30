import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../HomeData/Home'
import About from '../AboutData/About'
import { Button } from 'react-native'

const Tab = createMaterialTopTabNavigator();
const Nav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name='About' component={About} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Nav
