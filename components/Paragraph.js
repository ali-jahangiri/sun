import React from 'react';
import { StyleSheet, Text } from 'react-native';
import useDynamicStyle from '../Hooks/useDynamicStyle';

import { systemSize , systemColor } from "../style";

/**
 * @param {{size: "1" | "2" | "3" | "4" | "5" | "6" , weight : 'bold' | 'regular' | "light" , color : string , children : object , extendStyle? : object , overwrite? : {} }} props 
*/


 
const Paragraph = ({ children , size = '4' , weight = "regular" , color = "black" , extendStyle , overwrite }) => {
    const appendedStyle = useDynamicStyle(style , {size, weight , color , extendStyle , overwrite});
    return <Text style={appendedStyle.text}>{children}</Text>
}


const style  = ({ weight , color , size , extendStyle , overwrite }) => StyleSheet.create({
    text : {
        ...extendStyle,
        fontFamily : weight,
        color : systemColor.base[color],
        fontSize : systemSize.fontSize[size],
        ...overwrite
    }
})

export default Paragraph;