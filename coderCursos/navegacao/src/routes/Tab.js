import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TelaA from '../views/TelaA/TelaA';
import TelaB from '../views/TelaB/TelaB'
import TelaC from '../views/TelaC/TelaC'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator()



export default StackNavigator = (props) => {


    return (
        <Tab.Navigator
            screenOptions={



                ({ route }) => ({
                    activeTintColor: 'red',
                    inactiveTintColor: 'blue',
                    showLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        switch (route.name) {
                            case 'TelaA':
                                iconName = focused
                                    ? 'ios-information-circle'
                                    : 'ios-information-circle-outline';
                                break;

                            case 'TelaB':
                                iconName = focused
                                    ? 'ios-information-circle'
                                    : 'ios-information-circle-outline';
                                break;

                            case 'TelaC':
                                iconName = focused ? 'ios-list-circle-sharp' : 'ios-list-circle-outline';
                                break;

                            default:
                                break;
                        }


                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            initialRouteName="TelaB"


        >
            <Tab.Screen name="TelaA" component={TelaA} />
            <Tab.Screen name="TelaB" component={TelaB} />
            <Tab.Screen name="TelaC" component={TelaC} />


        </Tab.Navigator>

    )

}