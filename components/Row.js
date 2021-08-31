import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import useStyleOverwrite from '../Hooks/useStyleOverwrite';
import { systemHelperDevelopValue } from '../style';

const RenderNativeComponent = (props , wrappedWidth) => {
    const WrappedNativeComponent = {
        TouchableOpacity : <TouchableOpacity {...props} />,
        View : <View {...props} />
    }

    return WrappedNativeComponent[wrappedWidth]
}

const Row = ({ children , direction , as = "View" , _initializeStyle , style , ...rest }) => {
    const appendedStyle = useStyleOverwrite({ style , overwrite : ({ variant }) => ({
        flexDirection : systemHelperDevelopValue.directionFlexRow[variant.appDirection]
    })})
    
    
    return RenderNativeComponent({
        style : appendedStyle,
        children,
        ...rest,
    } , as);
}


export default Row;