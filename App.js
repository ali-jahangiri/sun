import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import { InitialLoader , SafeAreaRender } from './providers';

export default function App() {
  return (
    <SafeAreaRender style={style.container}>
      <InitialLoader>
        <Home />
      </InitialLoader>
      <StatusBar style="auto" />
    </SafeAreaRender>
  );
}

const style = StyleSheet.create({
  container : {
    flex: 1
  }
})