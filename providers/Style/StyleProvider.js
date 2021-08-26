import React from 'react';
import { createContext } from 'react';

export const StyleContext = createContext({});



const StyleProvider = ({ children , appStyleModel }) => {
    return (
        <StyleContext.Provider value={appStyleModel}>
            {children}
        </StyleContext.Provider>
    )
}


export default StyleProvider;