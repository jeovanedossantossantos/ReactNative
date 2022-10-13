import React from 'react'
import { View, Text } from 'react-native'
import Style from '../estilo'

export default props => {
    return (
        <React.Fragment>
            <Text style={Style.txtG}>{props.prin}</Text>
            <Text >{props.seg}</Text>
        </React.Fragment>
    )
}