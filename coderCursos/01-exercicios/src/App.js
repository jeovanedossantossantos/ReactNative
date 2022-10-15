import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import First from "./components/First/First"
import MimMax from './components/MimMax/MimMax';
import { Comp, CompTwo } from './components/Multi/Multi';
import Random from './components/Random/Random';
import Feag from './components/Frag/Feag';
import Botao from './components/Botao/Botao';
import Contado from './components/Contador/Contador';
import Pai from './components/Direta/Pai';
import PaiIndireta from './components/Indireta/Pai';
import ContadorV2 from './components/ContadorV2/ContadorV2';
import Diferenciar from './components/Diferenciar/Diferenciar';
import ParOuImpar from './components/ParaOuImpar/ParOuImpar';



export default function App() {
  return (
    <SafeAreaView style={styles.App}>

      {/* <MimMax one={3} two={2} />
      <Random min={1} max={10} />
      <Feag prin={"Titulo"} seg={"Texto"} />

      <Botao />
      <Contado start={100} />
      <Pai />
      <PaiIndireta /> */}
      {/* <First />
      <Comp />
      <CompTwo /> */}
      {/* <ContadorV2 /> */}

      {/* <Diferenciar /> */}
      <ParOuImpar num={3} />
    </SafeAreaView>
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
