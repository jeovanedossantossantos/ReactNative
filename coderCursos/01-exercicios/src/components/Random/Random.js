import React from 'react';
import { Text } from "react-native"
import Style from '../estilo'
export default Random = (props) => {
    const { min, max } = props

    const random = parseInt((Math.random() * max) + min)


    return (
        <Text style={Style.txtG}>Number random: {random}</Text>
    )

}