
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BotonContador } from '@/components/BotonContador';
import { ContadorDisplay } from '@/components/ContadorDisplay';
import {
  calcularValor,
  estadoUI,
  type ContadorConfig,
} from '@/domain/counter';

export default function Home() {
  const [valor, setValor] = useState(0);

  const config: ContadorConfig = {
    valor,
    paso: 1,
    minimo: 0,
    maximo: 10,
  };

  const estado = estadoUI(valor, config);

  const incrementar = () => {
    setValor(calcularValor(valor, config, 'incrementar'));
  };

  const decrementar = () => {
    setValor(calcularValor(valor, config, 'decrementar'));
  };

  const reiniciar = () => {
    setValor(0);
  };

  const [empanadas, setEmpanadas] = useState(0);

  const configEmpanadas: ContadorConfig = {
    valor: empanadas,
    paso: 1,
    minimo: 0,
    maximo: 10,
  };

  const estadoEmpanadas = estadoUI(empanadas, configEmpanadas);

  const incrementarEmpanadas = () => {
    setEmpanadas(
      calcularValor(empanadas, configEmpanadas, 'incrementar')
    );
  };

  const decrementarEmpanadas = () => {
    setEmpanadas(
      calcularValor(empanadas, configEmpanadas, 'decrementar')
    );
  };

  const reiniciarEmpanadas = () => {
    setEmpanadas(
      calcularValor(empanadas, configEmpanadas, 'reiniciar')
    );
  };

  const [jugos, setJugos] = useState(0);

  const configJugos: ContadorConfig = {
    valor: jugos,
    paso: 1,
    minimo: 0,
    maximo: 10,
  };

  const estadoJugos = estadoUI(jugos, configJugos);

  const incrementarJugos = () => {
    setJugos(calcularValor(jugos, configJugos, 'incrementar'));
  };

  const decrementarJugos = () => {
    setJugos(calcularValor(jugos, configJugos, 'decrementar'));
  };

  const reiniciarJugos = () => {
    setJugos(calcularValor(jugos, configJugos, 'reiniciar'));
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Bar Salesiano · Contadores</Text>

        <ContadorDisplay valor={valor} etiqueta="Sanduches" />

        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={incrementar}
            variante="primary"
            disabled={estado === 'MAXIMO'}
          />

          <BotonContador
            label="-1"
            onPress={decrementar}
            variante="secondary"
            disabled={estado === 'MINIMO'}
          />

          <BotonContador
            label="Reiniciar"
            onPress={reiniciar}
            variante="danger"
          />
        </View>

        <ContadorDisplay valor={empanadas} etiqueta="Empanadas" />

        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={incrementarEmpanadas}
            variante="primary"
            disabled={estadoEmpanadas === 'MAXIMO'}
          />

          <BotonContador
            label="-1"
            onPress={decrementarEmpanadas}
            variante="secondary"
            disabled={estadoEmpanadas === 'MINIMO'}
          />

          <BotonContador
            label="Reiniciar"
            onPress={reiniciarEmpanadas}
            variante="danger"
          />
        </View>

        <ContadorDisplay valor={jugos} etiqueta="Jugos" />

        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={incrementarJugos}
            variante="primary"
            disabled={estadoJugos === 'MAXIMO'}
          />

          <BotonContador
            label="-1"
            onPress={decrementarJugos}
            variante="secondary"
            disabled={estadoJugos === 'MINIMO'}
          />

          <BotonContador
            label="Reiniciar"
            onPress={reiniciarJugos}
            variante="danger"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EFE6D6',
  },
  content: {
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: '#0A0A0A',
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
});

const reiniciar = () => {
  setValor(0);
};
