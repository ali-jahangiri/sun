import { useContext } from "react";

import { StyleGateContext } from "../providers/Style/StyleGate"

const useStyleGate = () => {
    const context = useContext(StyleGateContext);
    return context;
}

export default useStyleGate;