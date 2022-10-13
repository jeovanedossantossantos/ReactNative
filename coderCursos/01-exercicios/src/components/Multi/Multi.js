import React from 'react';
import * as ReactNative from 'react-native';
import Style from '../estilo'

export const Comp = () => {
    return (
        <ReactNative.Text style={Style.txtG}>Comp 1</ReactNative.Text>

    )
}

export const CompTwo = () => {
    console.warn("Olá")
    return (
        <ReactNative.Text style={Style.txtG}>Comp Two</ReactNative.Text>
    )
}