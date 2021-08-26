import React from 'react';
import { createContext } from 'react';

export const StyleGateContext = createContext();

import  { systemColor , systemSize , systemSpace , systemVariant } from '../../style';

const StyleGate = ({ children , model = { size : { ...systemSize } , color : { ...systemColor } , space : { ...systemSpace } , variant : { ...systemVariant } } }) => {
    return (
        <StyleGateContext.Provider value={{ ...model}}>
            {children}
        </StyleGateContext.Provider>
    )
}


export default StyleGate;