import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import useDynamicStyle from '../Hooks/useDynamicStyle';
import { systemColor, systemSize, systemVariant } from '../style';
import { styleModifier } from '../utils';
import Paragraph from './Paragraph';

import useGateStyle from "../Hooks/useStyleGate";

/**
 * @param {{ size : "small" | "default" | 'large' , onPress : function , type : "primary" | "secondary" | "text" , renderChildren? : function , disabled? : boolean , round : "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" }} props 
*/



const Trigger = ({ children , size , onPress , type = 'secondary', renderChildren , disabled , round }) => {

    const styleContext = useGateStyle();
    const appendedStyle = useDynamicStyle(style , { size , type , disabled , round });

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

const style = ({ size , type , disabled , round }) => StyleSheet.create({
    container : {
        padding : 10,
        alignItems : "flex-start",
        justifyContent : 'center',
        borderRadius : systemSize.borderRadius[round],
        
        ...styleModifier(type === _types.primary, {
            backgroundColor : systemColor.business.primary,
            
        }),
        ...styleModifier(type === _types.secondary , {
            backgroundColor : systemColor.business.secondary,
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