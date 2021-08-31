import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import useDirectStyleContext from '../Hooks/useDirectStyleContext';
import useDynamicStyle from '../Hooks/useDynamicStyle';
import { styleModifier } from '../utils';
import Paragraph from './Paragraph';

const RenderNativeComponent = (props , wrappedWidth) => {
    const WrappedNativeComponent = {
        TouchableOpacity : <TouchableOpacity {...props} />,
        View : <View {...props} />
    }

    return WrappedNativeComponent[wrappedWidth]
}


const Picture = ({
    src , 
    onPress ,
    as = "View",
    width = 100,
    height = 100,
    resizeMode,
    round = '2',
    caption,
    captionBackgroundLinearGradient = ['transparent' , 'rgba(0,0,0,0.9)'],
    captionPadding = "3",
    captionColor = 'white',
    captionVerticalPadding = "3" , 
    captionHorizontalPadding = "3",
    subCaption,
    headerContent,
    activeOpacity = "light"
}) => {
    const appendedStyle = useDynamicStyle({ style , modifier : { round , captionPadding , captionPadding , captionHorizontalPadding , captionVerticalPadding , captionColor }})
    
    const { variant } = useDirectStyleContext();

    
    const WrappedComponent = ({ children }) => RenderNativeComponent({ style : appendedStyle.container , onPress , children , activeOpacity : variant.fadeTriggerClone[activeOpacity] } , as)

    const backgroundLinearForApplying = (() => {
        if(typeof captionBackgroundLinearGradient === "string") return [captionBackgroundLinearGradient , captionBackgroundLinearGradient];
        else return captionBackgroundLinearGradient
    })()

    return (
        <WrappedComponent style={appendedStyle.container}>
            <Image
                style={appendedStyle.image}
                resizeMode={resizeMode}
                source={{ uri : src , width , height }}
            />
            {
                !!headerContent && <View style={appendedStyle.header}>
                    {headerContent}
                </View>
            }
            {
                !!caption && <LinearGradient
                    style={appendedStyle.captionContainer}
                    colors={backgroundLinearForApplying} >
                        <Paragraph weight="regular" size={"3"} color={captionColor}>{caption}</Paragraph>
                        {
                            !!subCaption && <Paragraph weight="light" size={"4"} color={captionColor}>{subCaption}</Paragraph>
                        }
                </LinearGradient>
            }
        </WrappedComponent>
    )
}


const style = ({ context : { size : systemSize , space : systemSpace } }) => ({
    base : StyleSheet.create({
        container : {
            overflow: "hidden",
        },
        captionContainer : {
            position: 'absolute',
            zIndex : 5,
            bottom: 0,
            left: 0,
            width : "100%",
        },
        header : {
            position: "absolute",
            top: 0,
            left: 0,
            zIndex : 5
        }
    }),
    modifier : ({ round , captionPadding , captionHorizontalPadding , captionVerticalPadding }) => ([
        styleModifier(round , {
            image : {
                borderRadius : systemSize.borderRadius[round]
            },
            container : {
                borderRadius : systemSize.borderRadius[round],
            },
        }),
        styleModifier([captionPadding , captionVerticalPadding , captionHorizontalPadding] , {
            captionContainer : {
                padding : systemSpace.padding[captionPadding],
                paddingVertical : systemSpace.padding[captionVerticalPadding],
                paddingHorizontal : systemSpace.padding[captionHorizontalPadding],
            },
        })
    ])
})

export default Picture;