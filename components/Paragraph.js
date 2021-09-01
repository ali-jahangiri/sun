import React from 'react';
import { StyleSheet, Text } from 'react-native';
import useDynamicStyle from '../Hooks/useDynamicStyle';
import { styleModifier } from '../utils';

// /**
//  * @param {{size: "1" | "2" | "3" | "4" | "5" | "6" , weight : 'bold' | 'regular' | "light" , color : string }} props 
// */


 
const Paragraph = ({ children , size = '4' , weight = "regular" , color = "black" , disabled , _overwrite }) => {
    const appendedStyle = useDynamicStyle({ style , modifier : { size , weight , color , disabled } , _overwrite});
    return <Text style={appendedStyle.text}>{children}</Text>
}



export const style = ({context : { size : systemSize , color : systemColor }}) => ({
    base : StyleSheet.create({
        text : {
            marginBottom : -5,
        }
    }),
    modifier : ({ size , weight , color , disabled }) => ([
        styleModifier(color , {
            text : {
                color : {...systemColor.base , ...systemColor.business}[color]
            }
        }),
        styleModifier(weight , {
            text : {
                fontFamily: weight
            }
        }),
        styleModifier(size , {
            text : {
                fontSize : systemSize.fontSize[size]
            }
        }),
        styleModifier(disabled , {
            text : {
                color : systemColor.base.grey
            }
        })
    ])
})

export default Paragraph;