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
import Familia from './components/Relacao/Familia';
import Membro from './components/Relacao/Membro';
import UsuarioLogado from './components/UsuarioLogado/UsuarioLogado';
import ListaProdutosV2 from './components/Produtos/ListaProdutosV2';
import ListaProdutos from './components/Produtos/ListaProdutos';
import DigiteSeuNome from './components/DigiteSeuNome/DigiteSeuNome';
import Quadrado from './components/Layout/Quadrado';
import FlexboxV1 from './components/Layout/FlexboxV1';
import FlexboxV2 from './components/Layout/FlexboxV2';
import FlexboxV3 from './components/Layout/FlexboxV3';
import FlexboxV4 from './components/Layout/FlexboxV4';
import MegaSenaNumero from './components/MegaSena/MegaSenaNumero';
import Mega from './components/MegaSena/MegaSena';



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
      {/* <ParOuImpar num={3} /> */}
      {/* <Familia>
        <Membro nome="Bia" sobrenome="Arruda" />
        <Membro nome="Carlos" sobrenome="Arruda" />
      </Familia>
      <Familia>
        <Membro nome="Ana" sobrenome="Silva" />
        <Membro nome="Julia" sobrenome="Silva" />
        <Membro nome="Gui" sobrenome="Silva" />
        <Membro nome="Rebeca" sobrenome="Silva" />
      </Familia>*/}
      {/* <UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com' }} /> */}
      {/* <ListaProdutosV2 />
      <ListaProdutos /> */}
      {/* <DigiteSeuNome /> */}
      {/* <Quadrado lado={400} /> */}
      {/* <FlexboxV4 /> */}
      <Mega qtdeNumeros={12} />
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
