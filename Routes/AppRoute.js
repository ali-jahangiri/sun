import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabRoute from './TabRoute';

import routeTheme from './routeTheme';


const AppRoute = () => {
    return (
        <NavigationContainer theme={routeTheme}>
            <TabRoute />
        </NavigationContainer>
    )
}


export default AppRoute;