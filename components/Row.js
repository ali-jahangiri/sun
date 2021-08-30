import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import useDynamicStyle from '../Hooks/useDynamicStyle';
import useStyleInitializer from '../Hooks/useStyleInitializer';
import { systemHelperDevelopValue } from '../style';

const RenderNativeComponent = (props , wrappedWidth) => {
    const WrappedNativeComponent = {
        TouchableOpacity : <TouchableOpacity {...props} />,
        View : <View {...props} />
    }

    return WrappedNativeComponent[wrappedWidth]
}

const Row = ({ children , direction , as = "View" , _initializeStyle , style , ...rest }) => {
    
    // const internalStyle = useStyleInitializer(_initializeStyle , ({ variant }) => ({
    //     container : {
    //         flexDirection : direction || systemHelperDevelopValue.directionFlexRow[variant.appDirection]
    //     }
    // }))


    // const ss = useDynamicStyle({ style })

    return RenderNativeComponent({
        style : ss,
        children,
        ...rest,
    } , as);
}


const style = () => ({
    base : {
        container : {

        }
    }
})

export default Row;