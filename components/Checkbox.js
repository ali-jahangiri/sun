import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';

import useDynamicStyle from '../Hooks/useDynamicStyle';
import { styleModifier } from '../utils';
import Paragraph from './Paragraph';
import Row from './Row';


const Checkbox = ({ 
    selected , 
    onChange , 
    label ,
    disable , 
    _overwrite ,
    error , 
    marginVertical = "2",
    size = "small",
    boxBackgroundColor = 'white',
    boxBorderRadius = "2",
    labelDistance = "2",
    boxBorderColor = "lightgrey",
    boxBorderWidth = "default"
}) => {
    const appendedStyle = useDynamicStyle({ style , modifier : 
        {
            selected , disable , error , size , marginVertical , boxBackgroundColor , boxBorderRadius , labelDistance , boxBorderColor , boxBorderWidth
        } , _overwrite });

    const animatedValue = useRef(new Animated.Value(0)).current;
    const aboveTickAnimatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(animatedValue , {
                toValue : selected ? 1 : 0,
                duration: 100,
                useNativeDriver : true
            }),
            Animated.timing(aboveTickAnimatedValue , {
                toValue : selected ? 1 : 0,
                duration : 20,
                useNativeDriver : true,
            })
        ]).start()
    } , [selected]);

    const tickStyleEnhancedWithAnimation = {
        transform : [
        { scaleX : animatedValue},
        { rotate : "-50deg" }
    ]
    }

    const aboveTickStyleEnhancedWithAnimation = {
        transform: [
            { rotate : "-150deg" },
            {scaleY : aboveTickAnimatedValue},
            {scaleX : aboveTickAnimatedValue}
        ]
    }

    return (
        <Row disabled={disable} activeOpacity={1} style={appendedStyle.container} as="TouchableOpacity">
            <TouchableOpacity disabled={disable} activeOpacity={1} onPress={() => !disable && onChange()} style={appendedStyle.box}>
                <View style={appendedStyle.tick}>
                    <Animated.View style={[appendedStyle.tickBlock , tickStyleEnhancedWithAnimation]} />
                    <Animated.View style={[appendedStyle.tickBlock , appendedStyle.aboveTick , aboveTickStyleEnhancedWithAnimation]} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity disabled={disable} style={appendedStyle.label} onPress={() => !disable && onChange()}>
                <Paragraph _overwrite={appendedStyle.labelText} disabled={disable}>{label}</Paragraph>
            </TouchableOpacity>
        </Row>
    )
}


const style = ({ context : { size : systemSize , color : systemColor, space : systemSpace } }) => ({
    base : StyleSheet.create({
        container : {
            alignItems : 'center',
        },
        tick : {
            alignItems : 'center',
            justifyContent : 'center',
            height : "100%",
            flexDirection : "row"
        },
        tickBlock : {
            width : 4,
            height : 10,
            backgroundColor : systemColor.business.primary,
            transform: [{rotate : "-50deg"}],
            top: 5,
            left: -2,
            borderRadius: 5
        },
        aboveTick : {
            transform : [{ rotate : "-150deg" }]  , 
            height : 20 ,
            top : -1 , 
            left : 2,
            
        }
    }),
    modifier : ({ selected , disable , error , size , marginVertical , boxBackgroundColor , boxBorderRadius , labelDistance , boxBorderColor , boxBorderWidth }) => ([
        styleModifier([marginVertical , boxBackgroundColor , boxBorderRadius , labelDistance , size , boxBorderColor , boxBorderWidth ] , {
            container : {
                marginVertical : systemSpace.margin[marginVertical]
            },
            box : {
                backgroundColor : {...systemColor.base , ...systemColor.business}[boxBackgroundColor],
                width : systemSize.componentSize.checkbox[size],
                height : systemSize.componentSize.checkbox[size],
                borderRadius : systemSize.borderRadius[boxBorderRadius],
                borderColor : systemColor.base[boxBorderColor],
                borderWidth : systemSize.borderWidth[boxBorderWidth]
            },
            label : {
                marginHorizontal : systemSpace.margin[labelDistance]
            },
        }),
        styleModifier(disable , {
            box : {
                backgroundColor : systemColor.base.lightgrey
            },
            tickBlock : {
                backgroundColor : systemColor.base.white
            }
        }),
        styleModifier(error && selected , {
            labelText : {
                text : {
                    color: systemColor.base.red
                }
            },
            box : {
                backgroundColor : systemColor.base.red
            },
            tickBlock : {
                backgroundColor : systemColor.base.white
            }
        }),
        styleModifier(error && !selected , {
            labelText : {
                text : {
                    color: systemColor.base.red
                }
            },
            box : {
                borderColor : systemColor.base.red
            }
        })
    ])
})

export default Checkbox;