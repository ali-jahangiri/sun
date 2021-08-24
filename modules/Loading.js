import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';


const Loading = () => {
    return (
        <View style={style.container}>
            <ActivityIndicator size="large" color="lightblue" />
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        flex: 1 ,
        alignItems : 'center',
        justifyContent : 'center'
    }
})

export default Loading;