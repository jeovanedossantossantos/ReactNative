import React from 'react'
import { Text } from 'react-native'

import Filho from './Filho'


export default props => {
    const x = 1
    const y = 2
    return (
        <>
            <Filho a={x} b={y} />

        </>
    )
}