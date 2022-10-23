import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import TelaA from '../views/TelaA/TelaA';
import TelaB from '../views/TelaB/TelaB'
import TelaC from '../views/TelaC/TelaC'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaD from '../views/TelaD/TelaD';

const Drawer = createDrawerNavigator()



export default StackNavigator = (props) => {


    return (
        <Drawer.Navigator

            initialRouteName="TelaB"

        >
            <Drawer.Screen name="TelaA" component={TelaA} />
            <Drawer.Screen name="TelaB" component={TelaB} />
            <Drawer.Screen name="TelaC" component={TelaC} />
            <Drawer.Screen name="TelaD" component={TelaD} />


        </Drawer.Navigator>

    )

}