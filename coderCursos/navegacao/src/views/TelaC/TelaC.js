import React from 'react'
import TextoCentral from '../../components/TextoCentral/TextoCentral'


export default TelaC = (props) => {

    const { numero } = props.route.params ? props.route.params.numero : 0
    return (
        <TextoCentral corFundo='#a54321'>Tela C: {numero}</TextoCentral>
    )
}