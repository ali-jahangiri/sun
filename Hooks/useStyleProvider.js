import { useContext } from "react";
import { StyleContext } from "../providers/Style/StyleProvider";

const useStyleProvider = () => {
    const context = useContext(StyleContext);
    return context;
}


export default useStyleProvider;