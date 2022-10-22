import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './Stack'

export default Routes = (props) => {
    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </SafeAreaView>
    )
}