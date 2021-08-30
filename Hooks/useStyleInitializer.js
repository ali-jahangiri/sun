import { deepClone } from "../utils";
import useDirectStyleContext from "./useDirectStyleContext";

const useStyleInitializer = (injectedStyle, internalComponentStyle) => {
    const context = useDirectStyleContext();
    return {
        ...injectedStyle?.(deepClone(context)),
        ...internalComponentStyle?.(deepClone(context))
    }
}


export default useStyleInitializer;