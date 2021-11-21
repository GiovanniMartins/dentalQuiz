import * as SQLite from 'expo-sqlite';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Searchbar, Divider, ActivityIndicator } from 'react-native-paper';
const db = SQLite.openDatabase('Dados.db');

export default function ResultadoPorBairro() {
  let [inputBairro, setInputBairro] = useState('');
  const [loading, setLoading] = useState(false);
  let [retornoBairro, setRetornoBairro] = useState({});
  var [quantidadeRegistros, setQuantidadeRegistros] = useState(0); // Inicializei com 1 pois o contatador de questões estava dando 2 quando tinham 3 registros
  let [quantidadeAcertos, setQuantidadeAcertos] = useState(0);
  let countAcertos = 0;
  let countRegistros = 0;

  let searchBairro = () => {
    console.log('Bairro buscado: ', inputBairro);
    setLoading(true);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM information where bairro = ?',
        [inputBairro],
        (tx, results) => {
          console.log('Ensino ' + inputBairro);
          var temp = [];

          for (let i = 0; i < results.rows.length; ++i) {
            console.log(results.rows.item(i));
            temp.push(results.rows.item(i));
            countRegistros++;
            console.log('Quantidade' + countRegistros);
            console.log(
              'quantidade de acertos ' + results.rows.item(i).respostasCertas
            );
            countAcertos += Number(results.rows.item(i).respostasCertas);
            console.log('ContadorAcertos: ' + countAcertos);
          }
          setQuantidadeAcertos(countAcertos);
          console.log('Quantidade de acertos: ' + countAcertos);

          var len = results.rows.length;
          console.log('len', len);
          console.log('Busca por bairro');
          if (len > 0) {
            setRetornoBairro(results.rows.item(0));
            countRegistros = countRegistros * 10;
            console.log('Quantidade de registro: ' + countRegistros);
            console.log('Quantidade de acerto: ' + countAcertos);
            console.log('Multiplicacao: ' + countAcertos);
            countAcertos = countAcertos * 100;
            setQuantidadeAcertos(countAcertos / countRegistros);
            console.log('Resultado final ' + countAcertos);
            setQuantidadeRegistros(countRegistros);
            setLoading(false);
          } else {
            alert('Usuário não encontrado!');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: 24,
          paddingVertical: 100,
        }}
      >
        <Text style={styles.title}>Resultados por bairro: </Text>
        <Searchbar
          placeholder="Digite o bairro"
          onChangeText={(texto) => setInputBairro(texto)}
          value={inputBairro}
          style={{ padding: 10 }}
        />
        <TouchableOpacity
          title="Buscar Bairro"
          onPress={searchBairro}
          style={styles.button}
        >
          {loading ? (
            <ActivityIndicator animating={true} color={'#FFFFFF'} />
          ) : (
            <Text style={styles.buttonText}>Buscar</Text>
          )}
        </TouchableOpacity>
        <Divider />
        <View style={styles.listaArea}>
          <Text style={styles.tituloResultados}>
            Percentual dos acertos na idade selecionado:{' '}
            {quantidadeAcertos.toFixed(2)}%
          </Text>
          <Text style={styles.tituloResultados}>
            Quantidade de questões: {quantidadeRegistros}
          </Text>
        </View>
        <Divider />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: '#3A5D99',
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  button: {
    marginTop: 40,
    marginBottom: 40,
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
  listaArea: {
    marginVertical: 20,
  },
  tituloResultados: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3A5D99',
  },
});
