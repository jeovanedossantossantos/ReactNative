import React from 'react'
import { Button, Text } from 'react-native'
import Estilo from '../estilo'

export default props => {
    const gerarNumero = (max, min) => {
        const fator = max - min + 1
        return parseInt(Math.random() * fator) + min
    }
    return (
        <Button
            title='Executar'
            onPress={() => {
                const n = gerarNumero(props.max, props.min)
                props.funcao(n)
            }}

        />
    )
}