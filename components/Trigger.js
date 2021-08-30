import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useDynamicStyle from '../Hooks/useDynamicStyle';
import useIcon from '../Hooks/useIcon';
import { systemHelperDevelopValue, systemVariant } from '../style';
import { styleModifier } from '../utils';
import Paragraph from './Paragraph';

import { Feather } from "@expo/vector-icons"
import Row from './Row';

/**
 * @param {{ size : "small" | "default" | 'large' , onPress : function , type : "primary" | "secondary" | "text" , renderChildren? : function , disabled? : boolean , round : "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" , alignment : "left" | "center" | "right"}} props;
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
        type = 'primary', 
        renderChildren , 
        disabled , 
        round ,
        icon = "",
        alignment = "center",
        _overwrite }) => {

    const appendedStyle = useDynamicStyle({ style , modifier : { size , type , disabled , round , isIconOnly : !children , alignment } , _overwrite });

    const Icon = useIcon(icon, { size : 25 ,style : appendedStyle.icon });

    const contentRenderChecker = () => {
        if(renderChildren) return renderChildren;
        else if(children) return (
            <React.Fragment>
                <Paragraph disabled={disabled}>{children}</Paragraph>
                {
                    !!Icon && <View style={appendedStyle.iconContainer}>
                        {Icon}
                    </View>
                }
            </React.Fragment>
        );
        else if(!children && icon) return Icon
        else return null
    }

    return (
            <Row
                as="TouchableOpacity" 
                disabled={disabled} 
                activeOpacity={systemVariant.fadeTriggerOnActivePressState} 
                style={appendedStyle.container} 
                onPress={onPress} >
                    {contentRenderChecker()}
            </Row>
    )
}

const _types = {
    primary : "primary" ,
    secondary : "secondary" , 
    text : "text"
}


const style = ({ context : { size : systemSize , color } }) => ({
    base : StyleSheet.create({
        container : {
            width : "100%",
            padding : 10,
            // alignItems : "flex-start",
            justifyContent : 'center',
        },
        iconContainer : {
            marginLeft : 10
        },
        icon : {
            color: color.base.black
        }
    }),
    modifier: ({ round , type , disabled , isIconOnly , alignment }) => [
        styleModifier(round , {
            container : {
                borderRadius : systemSize.borderRadius[round],
            },
            label : {
                color : 'red'
            }
        }),
        styleModifier(type === _types.primary, {
            container : {
                backgroundColor : color.business.primary,
            }
        }),
        styleModifier(type === _types.primary, {
            container : {
                backgroundColor : color.business.primary
            } 
        }),
        styleModifier(isIconOnly , {
            container : {
                // alignSelf : systemHelperDevelopValue.directionX[alignment]
                alignSelf : "flex-start",
                flex : 1,
            },
        }),
        styleModifier(disabled , {
            container : {
                backgroundColor : color.base.lightgrey,
            },
            icon : {
                color: color.base.grey
            }
        }),
    ]
});



export default Trigger;