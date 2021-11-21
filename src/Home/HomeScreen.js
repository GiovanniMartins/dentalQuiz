import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <Text style={styles.titleText}>Dental Quiz</Text>
      <TouchableOpacity
        style={styles.buttonPrincipal}
        onPress={() => {
          navigation.navigate('InitialScreen');
        }}
      >
        <Text style={styles.buttonText}>Iniciar jogo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('ResultadoBairro');
        }}
      >
        <Text style={styles.buttonText}>Resultados por bairro</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('ResultadoIdade');
        }}
      >
        <Text style={styles.buttonText}>Resultados por idade</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('ResultadoEnsino');
        }}
      >
        <Text style={styles.buttonText}>Resultados por Ensino</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('ResultadoTotal');
        }}
      >
        <Text style={styles.buttonText}>Resultados gerais</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 32,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 20,
  },
  touchableOpacityText: {
    color: '#FFFFFF',
    fontSize: 23,
    textAlign: 'center',
    padding: 8,
  },
  buttonPrincipal: {
    marginVertical: 55,
    marginHorizontal: 25,
    height: 80,
    backgroundColor: '#E6BF6E',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
  },
  button: {
    marginTop: 25,
    height: 60,
    backgroundColor: '#3A5D99',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    backgroundColor: '#6E9AE6',
  },
});
