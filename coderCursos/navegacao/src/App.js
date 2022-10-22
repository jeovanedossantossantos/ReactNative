import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import TextoCentral from "./components/TextoCentral/TextoCentral"
import TelaA from './views/TelaA/TelaA';
import TelaB from './views/TelaB/TelaB';
import TelaC from './views/TelaC/TelaC';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TelaA />
      <TelaB />
      <TelaC />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
