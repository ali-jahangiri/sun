import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';

import { Home , CreateHabit } from '../Screens'
import TabBarItem from '../modules/TabBarItem';
import { systemColor } from '../style';

const { Navigator , Screen } = createBottomTabNavigator();

const TabRoute = () => (
    <Navigator screenOptions={{ headerShown : false , tabBarShowLabel : false , tabBarStyle , tabBarActiveTintColor : systemColor.business.primary }}>
        <Screen name="home" component={Home}
            options={{ tabBarButton : props => <TabBarItem {...props} /> , tabBarIcon : props =>  <Feather name="box" {...props} /> }} />
        <Screen name="createNewHabit" component={CreateHabit}
            options={{ tabBarButton : props => <TabBarItem {...props} isMainAction /> , tabBarIcon : props=>  <Feather name="plus" {...props} size={30} /> }} />
        <Screen name="unknownRoute" component={CreateHabit}
            options={{ tabBarButton : props => <TabBarItem {...props} /> , tabBarIcon : props=>  <Feather name="settings" {...props} /> }} />
    </Navigator>
)


const tabBarStyle = {
    alignItems : 'center' , 
    borderWidth : 0 , 
    borderTopColor : "transparent",  
    justifyContent : 'space-between', 
    height : 70  , 
    elevation : 0 , 
    backgroundColor : "white"
}

export default TabRoute;