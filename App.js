import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { InitialLoader , SafeAreaRender } from './providers';
import StyleProvider from './providers/Style/StyleProvider';
import AppRoute from './Routes/AppRoute';
import { systemColor, systemSize, systemSpace, systemVariant } from './style';

// const appStyleModel = createAppStyleModel({
//   color: {
//     base,
//     business
//   },
//   size : {

//   }
// })


export default function App() {
  return (
    <StyleProvider appStyleModel={{ color : systemColor , variant : systemVariant , size : systemSize , space : systemSpace }}>
      <SafeAreaRender style={style.container}>
        <InitialLoader>
          <AppRoute />
        </InitialLoader>
        <StatusBar style="auto" />
      </SafeAreaRender>
    </StyleProvider>
  );
}

const style = StyleSheet.create({
  container : {
    flex: 1
  }
})