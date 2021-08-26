import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import useDynamicStyle from '../Hooks/useDynamicStyle';
import { systemVariant } from '../style';
import { styleModifier } from '../utils';
import Paragraph from './Paragraph';


/**
 * @param {{ size : "small" | "default" | 'large' , onPress : function , type : "primary" | "secondary" | "text" , renderChildren? : function , disabled? : boolean , round : "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" }} props;
*/

const injectStyleFromPropsModel = {
    backgroundColor : "",
    borderRadius : "",
    alignItems : "",
    fontSize : "",
    textColor : "",
    paddingTop : "",
    paddingBottom : "",
    paddingHorizontal: "",
    paddingVertical : "",

}

const Trigger = ({ 
        children , 
        size , 
        onPress , 
        type = 'secondary', 
        renderChildren , 
        disabled , 
        round , 
        styleModel = {} }) => {

    const appendedStyle = useDynamicStyle({ style , modifier : { size , type , disabled , round  } });
    
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

const style = ({ modifier : { size , type , disabled , round } , context : { size : systemSize , color } }) => StyleSheet.create({
    container : {
        padding : 10,
        alignItems : "flex-start",
        justifyContent : 'center',
        borderRadius : systemSize.borderRadius[round],
        ...styleModifier(type === _types.primary, {
            backgroundColor : color.business.primary,
            
        }),
        ...styleModifier(type === _types.secondary , {
            backgroundColor : color.business.secondary,
        }),
        ...styleModifier(disabled , {
            opacity : systemVariant.fadeOpacity,
            backgroundColor : color.base.lightgrey
        })
    },
    label : {

    },
})



export default Trigger;