import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './Stack'
import Tab from './Tab'
import Drawer from './Drawer'

export default Routes = (props) => {
    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <NavigationContainer>
                <Tab />
                {/* <StackNavigator /> */}
                {/* <Drawer /> */}
            </NavigationContainer>
        </SafeAreaView>
    )
}