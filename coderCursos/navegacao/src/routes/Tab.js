import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import TelaA from '../views/TelaA/TelaA';
import TelaB from '../views/TelaB/TelaB'
import TelaC from '../views/TelaC/TelaC'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator()



export default StackNavigator = (props) => {


    return (
        <Tab.Navigator
            screenOptions={{
                activeTintColor: "red",
                InactiveTintColor: "blue",
                labelStyle: { fontSize: 30 }
            }}
            initialRouteName="TelaB"

        >
            <Tab.Screen name="TelaA" component={TelaA} />
            <Tab.Screen name="TelaB" component={TelaB} />
            <Tab.Screen name="TelaC" component={TelaC} />


        </Tab.Navigator>

    )

}