import React from 'react';
import { useFonts } from 'expo-font';
import Loading from '../../modules/Loading';


const InitialLoader = ({ children }) => {
    const [loaded, error] = useFonts({ 
        light : require('../../assets/fonts/Poppins-Light.ttf'),
        regular : require('../../assets/fonts/Poppins-Regular.ttf'),
        bold : require('../../assets/fonts/Poppins-Bold.ttf'),
    });
    
    return !loaded ? <Loading/> : children
}


export default InitialLoader