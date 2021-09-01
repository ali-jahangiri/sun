import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, TouchableOpacity} from 'react-native';
import useDynamicStyle from '../Hooks/useDynamicStyle';
import { styleModifier } from '../utils';
import Paragraph from './Paragraph';
import Row from './Row';


const Radio = ({
    label,
    disable ,
    onChange ,
    size = "default",
    selected,
    _overwrite,
    marginVertical = "3",
    error
}) => {
    const appendedStyle = useDynamicStyle({ style , modifier : { size , disable , marginVertical , selected , error } , _overwrite });

    const animatedValue = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        Animated.timing(animatedValue , {
            toValue : selected ? .4 : 1,
            duration: 150,
            useNativeDriver : true
        }).start();

    } , [selected])

    const changeHandler = () => !disable && onChange()

    const enhancerStyle = { 
        transform : [{
            scale : animatedValue
        }]
    }

    return (
        <Row style={appendedStyle.wrapper}>
            <TouchableOpacity disabled={disable} activeOpacity={1} onPress={changeHandler} style={appendedStyle.container}>
                <Animated.View style={[appendedStyle.bullet , enhancerStyle]} />
            </TouchableOpacity>
            <Row as="TouchableOpacity" disabled={disable} style={appendedStyle.label} onPress={changeHandler}>
                <Paragraph _overwrite={error && appendedStyle.labelText} disabled={disable}>{label}</Paragraph>
            </Row>
        </Row>
    )
}


const style = ({ context : { color : systemColor , size : systemSize , space : systemSpace , } }) => ({
    base : StyleSheet.create({
        wrapper : {
            flex: 1,
        },
        container : {
            borderRadius : 100,
            borderColor : systemColor.base.lightgrey,
            backgroundColor : systemColor.business.primary,
            borderWidth : 2,
            width : 30 ,
            height : 30,
            alignItems : 'center',
            justifyContent : 'center',
            overflow: 'hidden',
        },
        label : {
            marginHorizontal : 10,
        },
        bullet : {
            width : 30,
            height : 30,
            backgroundColor : "white",
            borderRadius : 100,
        },
    }),
    modifier : ({ size , disable , marginVertical , selected , error }) => ([
        styleModifier(marginVertical , {
            wrapper : {
                marginVertical : systemSpace.margin[marginVertical]
            }
        }),
        styleModifier(!selected && disable , {
            bullet : {
                backgroundColor : systemColor.base.lightgrey
            },
        }),
        styleModifier(selected && disable , {
            bullet : {
                backgroundColor : systemColor.base.white,
            },
            container : {
                backgroundColor : systemColor.base.lightgrey
            },
        }),
        styleModifier(error , {
            labelText : {
                text : {
                    color: systemColor.base.red
                }
            },
            container : {
                borderColor : systemColor.base.red,
                backgroundColor : systemColor.base.red
            },

        })
    ])
})

export default Radio;