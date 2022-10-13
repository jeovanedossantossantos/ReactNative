import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import First from "./components/First/First"
import MimMax from './components/MimMax/MimMax';
import { Comp, CompTwo } from './components/Multi/Multi';
import Random from './components/Random/Random';
import Feag from './components/Frag/Feag';
import Botao from './components/Botao/Botao';


export default function App() {
  return (
    <View style={styles.App}>

      <MimMax one={3} two={2} />
      <Random min={1} max={10} />
      <Feag prin={"Titulo"} seg={"Texto"} />

      <Botao />
      {/* <First />
      <Comp />
      <CompTwo /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  App: {
    flexGrow: 1,
    color: 'white',
    backgroundColor: "#ccc",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
