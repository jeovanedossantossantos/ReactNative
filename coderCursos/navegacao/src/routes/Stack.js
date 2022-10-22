import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import TelaA from '../views/TelaA/TelaA';
import TelaB from '../views/TelaB/TelaB'
import TelaC from '../views/TelaC/TelaC'
const Stack = createStackNavigator()

export default StackNavigator = (props) => {
    return (
        <Stack.Navigator initialRouteName='TelaA'
            screenOptions={{ headerShown: true }}
        >
            <Stack.Screen name="TelaA" component={TelaA}
                options={{ title: "Informações Iniciais" }}
            />
            <Stack.Screen name="TelaB" component={TelaB} />
            <Stack.Screen name="TelaC" component={TelaC} />
        </Stack.Navigator>
    )

}