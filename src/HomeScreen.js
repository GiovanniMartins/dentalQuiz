import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from 'react';

export default function  HomeScreen({navigation}) {
  
  return(
    <View>
      <View style={styles.background}>
        <View>
          <TouchableOpacity style={styles.button}  onPress={()=>{navigation.navigate('InitialScreen');}}>
            <Text style={styles.buttonText}>
              Iniciar jogo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('ListaPorBairro');}}>
            <Text style={styles.buttonText}>
              Listar por bairro
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('ListaPorIdade');}}>
            <Text style={styles.buttonText}>
              Listar por idade
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('ListaPorEnsino');}}>
            <Text style={styles.buttonText}>
              Listar por Ensino
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('ListaTodosDados');}}>
            <Text style={styles.buttonText}>
              Listar tudo
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

 const styles = StyleSheet.create({
  touchableOpacityText: {
    color: '#FFFFFF',
    fontSize: 23,
    textAlign: 'center',
    padding: 8
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#cc3535' 
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  background: {
    backgroundColor: '#8bf0d5'
  }
})
