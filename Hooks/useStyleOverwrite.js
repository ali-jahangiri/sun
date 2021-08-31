import { deepClone } from "../utils";
import useDirectStyleContext from "./useDirectStyleContext";

const useStyleOverwrite = ({ style , overwrite }) => {
    const context = useDirectStyleContext();
    const receivedOverwriteStyle = overwrite(context);
    const receivedBaseStyle = deepClone(style);

    return {
        ...receivedBaseStyle,
        ...receivedOverwriteStyle
    }
}


export default useStyleOverwrite;