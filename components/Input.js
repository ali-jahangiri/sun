import React, { useEffect, useRef, useState } from 'react';
import { Animated, AppRegistry, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import useDynamicStyle from '../Hooks/useDynamicStyle';
import { styleModifier } from '../utils';
import ParagraphAnimated from './ParagraphAnimated';
import Row from './Row';


const Input = ({ 
    value = "" ,
    placeholder = "",
    type = "text",
    disable ,
    error ,
    onChange = () => {},
    marginVertical = "6",
    inputBorderColor = "lightgrey",
    inputBorderRadius = "2",
    inputBorderWidth = "default",
    inputFontSize = "4",
}) => {

    const appendedStyle = useDynamicStyle({ style , modifier : { marginVertical , inputBorderRadius , inputBorderColor , inputBorderWidth , inputFontSize , disable , error }});

    const [isFocused, setIsFocused] = useState(false);

    const placeholderPosition = useRef(new Animated.ValueXY({ x : 15 , y : 0 })).current;
    const placeholderColor = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        if(isFocused) inputRef.current?.blur()
    } , [disable])

    useEffect(() => {
        (() => {
            if(value) return;
            Animated.timing(placeholderPosition , {
                toValue : { x : isFocused ? 5 : 15 , y : isFocused ? -15 : 10 },
                duration : 200,
                useNativeDriver : true
            }).start()
        })();

        Animated.timing(placeholderColor , {
            toValue : isFocused || value ? 1 : 0,
            duration : 250,
            useNativeDriver : false
        }).start();

    } , [isFocused])

    const inputRef = useRef();

    const focusHandler = () => {    
        setIsFocused(true);
        inputRef.current?.focus();
    }


    const placeholderStyleEnhancedWithAnimation = {
        transform : [
            {translateY : placeholderPosition.y},
            {translateX : placeholderPosition.x}
        ]
    }

    const placeholderColorEnhancedWithAnimated = {
        color : placeholderColor.interpolate({
            inputRange : [0 , 1],
            outputRange : ['grey', "black"]
        }),
        fontSize : placeholderColor.interpolate({
            inputRange : [0 , 1],
            outputRange : [20, 13]
        }),
        ...(() => {
            if(disable) {
                return {
                    backgroundColor : 'transparent',
                    color : 'lightgrey'
                }
            }else if(error) {
                return {
                    color: 'red'
                }
            }
        })()
    }

    return (
        <Row style={appendedStyle.container}>
            {
                !!placeholder && <Animated.View style={[appendedStyle.placeholder , placeholderStyleEnhancedWithAnimation]} >
                    <TouchableOpacity style={appendedStyle.placeholderPressContainer} activeOpacity={1} onPress={focusHandler}>
                        <ParagraphAnimated disabled={disable} _animatedStyleForInjection={placeholderColorEnhancedWithAnimated}>
                            {placeholder}
                        </ParagraphAnimated>
                    </TouchableOpacity>
                </Animated.View>
            }
            <View style={appendedStyle.inputContainer}>
                <TextInput
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => !disable && setIsFocused(false)}
                    ref={inputRef} 
                    style={appendedStyle.input}
                    value={value} 
                    onChangeText={value => onChange(value)} />
            </View>
            {
                !!disable && <View style={appendedStyle.disableWrapper} />
            }
        </Row>
    )
}


const style = ({ context : { color : systemColor, size : systemSize , space : systemSpace } }) => ({
    base : StyleSheet.create({
        container : {},
        inputContainer : {
            width: "100%",
            alignItems : 'center',
            justifyContent : 'center'
        },
        input : {
            width: "100%",
        },
        placeholderPressContainer : {
            height : "100%",
            width : "100%",
            alignItems : 'center',
            justifyContent : 'center',
            paddingHorizontal : systemSpace.padding[2]
        },
        placeholder : {
            position: "absolute",
            zIndex : 5,
            top: "5%",
            alignItems : 'center',
            justifyContent : 'center',
            right: 0,
            backgroundColor : systemColor.base.white
        },
        disableWrapper : {
            width : "100%",
            height : "120%",
            backgroundColor : "transparent",
            position: 'absolute',
            left: 0,
            top: "-20%",
            zIndex : 5
        }
        
    }),
    modifier : ({ marginVertical , inputBorderRadius , inputBorderWidth , inputBorderColor , inputFontSize , disable , error}) => ([
        styleModifier([marginVertical , inputBorderRadius , inputFontSize] , {
            container : {
                marginVertical : systemSpace.margin[marginVertical]
            },
            inputContainer : {
                borderColor : {...systemColor.base , ...systemColor.business}[inputBorderColor],
                borderWidth : systemSize.borderWidth[inputBorderWidth],
                borderRadius : systemSize.borderRadius[inputBorderRadius],
                height : 55,
            },
            input : {
                fontSize : systemSize.fontSize[inputFontSize],
                paddingHorizontal : 15,
                color : systemColor.base.black
            }
        }),
        styleModifier(disable , {
            inputContainer : {
                backgroundColor : systemColor.base.lightgrey
            },
            placeholderPressContainer : {
                backgroundColor : systemColor.base.lightgrey
            },
            input : {
                color: systemColor.base.grey
            },
        }),
        styleModifier(error , {
            inputContainer : {
                borderColor : systemColor.base.red
            },
            input : {
                color: systemColor.base.red
            }
        })
    ])
})
export default Input;