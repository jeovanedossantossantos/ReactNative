import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import TelaA from '../views/TelaA/TelaA';
import TelaB from '../views/TelaB/TelaB'
import TelaC from '../views/TelaC/TelaC'
import PassoStack from '../components/PassoStack/PassoStack';
const Stack = createStackNavigator()



export default StackNavigator = (props) => {

    const menu = [
        {
            name: 'TelaA',
            options: { title: "Informações Iniciais" },
            avancar: 'TelaB',
            children: <TelaA />

        },
        {
            name: 'TelaB',
            options: { title: "Informações de B" },
            avancar: 'TelaC',
            children: <TelaB />,
            voltar: true,

        },

    ]
    return (
        <Stack.Navigator initialRouteName='TelaA'
            screenOptions={{ headerShown: true }}
        >

            <Stack.Screen
                name='TelaA'
                options={{ title: "Informações A" }}

            >
                {props => (
                    <PassoStack
                        {...props}
                        avancar={'TelaB'}
                        voltar>
                        <TelaA />
                    </PassoStack>

                )}
            </Stack.Screen>
            <Stack.Screen
                name='TelaB'
                options={{ title: "Informações B" }}

            >
                {props => (
                    <PassoStack
                        {...props}
                        avancar={'TelaC'}
                        voltar
                        avancarParams={{ numero: 10047 }}>
                        <TelaB />
                    </PassoStack>

                )}
            </Stack.Screen>
            <Stack.Screen
                name='TelaC'
                options={{ title: "Informações C" }}

            >
                {props => (
                    <PassoStack
                        {...props}
                        avancar={'TelaC'}
                        voltar
                        avancarParams={{ numero: 200 }}
                    >
                        <TelaC {...props} />
                    </PassoStack>

                )}
            </Stack.Screen>
        </Stack.Navigator>
    )

}