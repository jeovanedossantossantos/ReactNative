import React, { useState } from 'react';
import { View, Text, Button } from "react-native"
import Style from "../estilo"

export default props => {
    const [namber, setNamber] = useState(props.start)
    1


    return (
        <>

            <Text style={Style.txtG}>
                {namber}
            </Text>


            <Button title='-1' onPress={() => setNamber(namber - 1)} />
            <Button title='+1' onPress={() => setNamber(namber + 1)} />


        </>
    )
}
// export default Contado