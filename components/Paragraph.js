import React from 'react';
import { StyleSheet, Text } from 'react-native';
import useDynamicStyle from '../Hooks/useDynamicStyle';

/**
 * @param {{size: "1" | "2" | "3" | "4" | "5" | "6" , weight : 'bold' | 'regular' | "light" , color : string , children : object , extendStyle? : object , overwrite? : {} }} props 
*/


 
const Paragraph = ({ children , size = '4' , weight = "regular" , color = "black"}) => {
    const appendedStyle = useDynamicStyle({ style , modifier : { size , weight , color }});
    return <Text style={appendedStyle.text}>{children}</Text>
}


const style  = ({ modifier : { size , weight , color } , context : { color : systemColor , size : systemSize } }) => StyleSheet.create({
    text : {
        fontFamily : weight,
        color : systemColor.base[color],
        fontSize : systemSize.fontSize[size],
    }
})

export default Paragraph;