import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import Estilo from '../estilo'

export default props => {
    const data = {
        name: "Teste",
        date: "2021/02/03"
    }
    const [response, setResponse] = useState(data)
    return (
        <View>
            <Text>{response.name} - {response.date}</Text>
            <TextInput
                placeholder="Digite seu Nome"
                value={response.name}
                onChangeText={name => setResponse({ ...response, name: name })}
            />
        </View>
    )
}