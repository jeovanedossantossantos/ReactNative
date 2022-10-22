import React from 'react'
import TextoCentral from '../../components/TextoCentral/TextoCentral'


export default TelaA = (props) => {
    props.navigation.navigate("TelaB")

    return (
        <TextoCentral corFundo='#e53935'>Tela A</TextoCentral>
    )
}