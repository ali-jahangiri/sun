import useStyleGate from "./useStyleGate";
import useStyleProvider from "./useStyleProvider";


const useDynamicStyle = ({style  , modifier , injectedStyle }) => {
    const gateStyleContext = useStyleGate();
    const styleProviderContext = useStyleProvider();
    
    const providedStyleFromContext = {
        ...styleProviderContext,
        ...gateStyleContext
    }

    console.log(styleProviderContext);
    return style({ modifier , injectedStyle , context : providedStyleFromContext });
    // return useMemo(() => {
    // } , Object.values(dynamicPropertiesObject));
}



export default useDynamicStyle;