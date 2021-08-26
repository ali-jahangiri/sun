import { useMemo } from "react";

const useDynamicStyle = (targetStyleCallback , dynamicPropertiesObject) => {
    // return useMemo(() => {
        return targetStyleCallback(dynamicPropertiesObject);
    // } , Object.values(dynamicPropertiesObject));
}



export default useDynamicStyle;