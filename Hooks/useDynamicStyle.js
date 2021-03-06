import { useMemo } from "react";
import { deepClone } from "../utils";
import useStyleGate from "./useStyleGate";
import useStyleProvider from "./useStyleProvider";


const useDynamicStyle = ({style  , modifier , _overwrite = false ,  }) => {
    const gateStyleContext = useStyleGate();
    const styleProviderContext = useStyleProvider();
    

    if(!style) throw new Error("Style callback don't provided , Please first Provide a Style constructor!")

    const providedStyleFromContext = {
        ...styleProviderContext,
        ...gateStyleContext
    }
    const styleForInjection = useMemo(() => {
        const { base : passedBase , modifier : modifierPassed } = style({ context : providedStyleFromContext });
        
        // Fallback for when we don't have any modifier inside injected style
        // When already provided style form parent scop and just want pass '_overwrite' properties to make new style for current context and scop
        if(typeof style === "object") return style;
        if(!modifier) return passedBase;

        const target = {
            base : passedBase ,
            modifier : modifierPassed(modifier)
        }
        const receivedStyle = deepClone(target);
        
        const baseStyle = receivedStyle.base;
        const modifierStyle = receivedStyle.modifier;
    
        modifierStyle.filter(el => el)
            .map(el => {
                Object.entries(el).map(([key , value]) => {
                    baseStyle[key] = {
                        ...baseStyle[key],
                        ...value
                    }
                })
            });

        return baseStyle

    } , [...Object.values(modifier || {}) , _overwrite])


    if(_overwrite) {
        // Overwrite style in must priority way
        Object.entries(typeof _overwrite === "function" ? _overwrite(providedStyleFromContext) || {} : _overwrite)
            .map(([key , value]) => {
                styleForInjection[key] = {
                    ...styleForInjection[key],
                    ...value
                }
            })
    }

    return styleForInjection;
}



export default useDynamicStyle;