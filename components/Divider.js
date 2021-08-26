import React from 'react';
import { StyleSheet, View } from 'react-native';
import useDynamicStyle from '../Hooks/useDynamicStyle';


const Divider = ({ vertical = "horizontal" , width = 75 , height = 25 , round = 2 , distance = 2}) => {
    const appendedStyle = useDynamicStyle({ modifier : { vertical, width , height , round , distance } , style })
    return (
        <View style={appendedStyle.container}  />
    )
}


const style = ({ modifier : { vertical , width , height , round , distance} , context : { size : systemSize , space , color : { base }}}) => StyleSheet.create({
    container : {
        backgroundColor : base.lightgrey,
        width : vertical === "horizontal" ? `${systemSize.absolute[width]}%` : width / 5,
        alignSelf : 'center',
        height : vertical === "horizontal" ? height : height * 3 ,
        borderRadius : systemSize.borderRadius[round],
        marginVertical : space.margin[distance]
    }
});


export default Divider;