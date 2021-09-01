import React from 'react';
import { Animated } from 'react-native';
import useDynamicStyle from '../Hooks/useDynamicStyle';

import { style } from "./Paragraph";

const ParagraphAnimated = ({ _animatedStyleForInjection = {} , children , size = '4' , weight = "regular" , color = "black" , disabled , _overwrite}) => {
    const appendedStyle = useDynamicStyle({ style , modifier : { size , weight , color , disabled } });
    return (
        <Animated.Text style={[appendedStyle.text , _animatedStyleForInjection]}>
            {children}
        </Animated.Text>
    )
}



export default ParagraphAnimated;