import React, { useState } from 'react'
import { Text } from 'react-native'

import Filho from './Filho'
import Estilo from '../estilo'


export default props => {

    const [numero, setNumero] = useState(0)
    const exibirValor = (numero) => {
        setNumero(numero)
    }
    return (
        <>

            <Text style={Estilo.txtG}>{numero}</Text>
            <Filho min={0} max={59} funcao={exibirValor} />

        </>
    )
}