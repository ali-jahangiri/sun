import React from 'react';
import { useContext, useLayoutEffect, useState } from 'react';
import { StyleContext } from '../providers/Style/StyleProvider'
import { StyleGateContext } from "../providers/Style/StyleGate";

const useIcon = (iconName , props) => {
    const styleProviderContext = useContext(StyleContext);
    // const nearStyleGateContext = useContext(StyleGateContext);
    const [Svg, setSvg] = useState(null);
    
    useLayoutEffect(() => {
        import("@expo/vector-icons")
            .then(data => {
                const TargetSvg = data[styleProviderContext.variant.iconPack];
                setSvg(<TargetSvg name={iconName} {...props} />)
            })
    } , [iconName , ...Object.values(props)]);


    return Svg
}


export default useIcon;