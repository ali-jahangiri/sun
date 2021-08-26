import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import useDynamicStyle from '../Hooks/useDynamicStyle';


const TabBarItem = ({ children , onPress , isMainAction }) => {
    const isFocused = useIsFocused();

    const appendedStyle = useDynamicStyle(style , {isMainAction})


    return (
        <TouchableOpacity style={appendedStyle.container} onPress={onPress}>
            <View style={appendedStyle.innerContainer}>
                {children}
            </View>
        </TouchableOpacity>
    )
}

const style = ({ isMainAction }) => StyleSheet.create({
    container : {
        flex: 1 , 
    },
    innerContainer : {
        backgroundColor : isMainAction ? "red" : "white",
        alignItems : 'center',
        justifyContent : 'center'
    }
})

export default TabBarItem;