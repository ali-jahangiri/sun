import React from 'react';
import { createContext } from 'react';

export const StyleGateContext = createContext();


import  { systemColor , systemSize , systemSpace , systemVariant } from '../../style';

const base = { size : { ...systemSize } , color : { ...systemColor } , space : { ...systemSpace } , variant : { ...systemVariant } };


const StyleGate = ({ children , extend }) => (
    <StyleGateContext.Provider value={{ ...base , ...extend?.(base) }}>
            {children}
    </StyleGateContext.Provider>
)


export default StyleGate;