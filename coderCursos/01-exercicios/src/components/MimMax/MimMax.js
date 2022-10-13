import React from "react";
import { Text } from "react-native"
import Style from "../estilo"


export default (props) => {

    const respoMaior = props.one > props.two ? props.one : props.two
    const respoMenor = props.one < props.two ? props.one : props.two

    return (<Text style={Style.txtG}>O valor {respoMaior}  é maior que o valor {respoMenor}</Text>)

}

