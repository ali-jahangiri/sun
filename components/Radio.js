import React from 'react';
import { StyleSheet, View } from 'react-native';
import useDynamicStyle from '../Hooks/useDynamicStyle';


const Radio = () => {
    const appendedStyle = useDynamicStyle({ style , modifier : {} });

    return (
        <View style={appendedStyle.container}>
            <View style={appendedStyle.bullet} />
        </View>
    )
}


const style = () => ({
    base : StyleSheet.create({
        container : {
            borderRadius : 10,
            width : 50 ,
            height : 50,
        },
        bullet : {

        }
    }),
    modifier : () => ({
        
    })
})

export default Radio;