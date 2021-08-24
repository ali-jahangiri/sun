import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import useDynamicStyle from '../Hooks/useDynamicStyle';
import { systemColor, systemVariant } from '../style';
import { styleModifier } from '../utils';
import Paragraph from './Paragraph';

/**
 * @param {{ size : "small" | "default" | 'large' , onPress : function , type : "primary" | "secondary" | "text" , renderChildren? : function , disabled? : boolean }} props 
*/



const Trigger = ({ children , size = 'default' , onPress , type = 'secondary', renderChildren , disabled }) => {

    const appendedStyle = useDynamicStyle(style , { size , type , disabled });

    return (
        <TouchableOpacity disabled={disabled} activeOpacity={systemVariant.fadeTriggerOnActivePressState} style={appendedStyle.container} onPress={onPress}>
            {
                renderChildren?.() || <Paragraph>{children}</Paragraph>
            }
        </TouchableOpacity>
    )
}

const _types = {
    primary : "primary" ,
    secondary : "secondary" , 
    text : "text"
}

const style = ({ size , type , disabled }) => StyleSheet.create({
    container : {
        padding : 10,
        alignItems : "flex-start",
        justifyContent : 'center',
        
        
        ...styleModifier(type === _types.primary, {
            backgroundColor : systemColor.business.primary,
            
        }),
        ...styleModifier(disabled , {
            opacity : systemVariant.fadeOpacity,
            backgroundColor : systemColor.base.lightgrey
        })
    },
    label : {

    },
})



export default Trigger;