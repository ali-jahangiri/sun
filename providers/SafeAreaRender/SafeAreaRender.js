import React from 'react';  

import { Platform, SafeAreaView, StatusBar, View } from 'react-native';

const isAndroid = Platform.OS === 'android' ? true : false;

const SafeAreaRender = ({ children , ...rest }) => {

    return isAndroid ? <View {...rest} style={{ marginTop : StatusBar.currentHeight , ...rest?.style }}>{children}</View>
         : <SafeAreaView {...rest}>{children}</SafeAreaView>
}


export default SafeAreaRender;