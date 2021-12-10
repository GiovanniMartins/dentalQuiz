import * as SQLite from 'expo-sqlite';
import { FlatList, SafeAreaView, View, StyleSheet, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
const db = SQLite.openDatabase('Dados.db');

export default function ResultadoTodosDados() {
  //'SELECT * FROM INFORMATION order by student_id desc limit 1'
  let [flatListItems, setFlatListItems] = useState([]);
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM information', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
          console.log(results.rows.item(i));
        }
        setFlatListItems(temp);
      });
    });
  }, []);

  let listViewItemSeparator = () => {
    return (
      <View
        style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }}
      />
    );
  };

  let listaView = (item) => {
    return (
      <View
        key={item.student_id}
        style={{ backgroundColor: 'white', padding: 20 }}
      >
        <Text style={styles.tituloResultados}>Id: {item.student_id}</Text>
        <Text style={styles.tituloResultados}>Idade: {item.idade}</Text>
        <Text style={styles.tituloResultados}>Bairro: {item.bairro}</Text>
        <Text style={styles.tituloResultados}>TipoEnsino: {item.ensino}</Text>
        <Text style={styles.tituloResultados}> Perguntas: {item.respostasCertas}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <FlatList
            ItemSeparatorComponent={listViewItemSeparator}
            style={{ marginTop: 30 }}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            data={flatListItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listaView(item)}
          />
        </View>
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

