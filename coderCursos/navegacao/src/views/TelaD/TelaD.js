import React from 'react'
import { Button, View } from 'react-native'
import TextoCentral from '../../components/TextoCentral/TextoCentral'


export default TelaD = (props) => {

    return (

        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                <Button
                    title="Abrir"
                    onPress={() => props.navigation.openDrawer()}
                />
            </View>
            <View style={{ flex: 1 }}>
                <TextoCentral corFundo='#354586' corTexto='#000'>Tela D:</TextoCentral>
            </View>
        </View>
    )
}