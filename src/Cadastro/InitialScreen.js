import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import * as SQLite from 'expo-sqlite';
import { useDispatch } from 'react-redux';
import { TextInput } from 'react-native-paper';
import { Creators as PerguntasActions } from '../store/ducks/perguntas';

const db = SQLite.openDatabase('Dados.db'); // cria o banco de dados e se existir inicia o BD

export default function InitialScreen({ navigation }) {
  const dispatch = useDispatch();
  let [userAge, setUserAge] = useState('');
  let [userDistrict, setUserDistrict] = useState('');
  let [typeOfSchool, setTypeOfSchool] = useState('');

  const createTable = () => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='information'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          //txn.executeSql('DROP TABLE IF EXISTS INFORMATION', []);
          if (res.rows.length == 0) {
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS information(student_id INTEGER PRIMARY KEY AUTOINCREMENT, idade VARCHAR(30), bairro VARCHAR(30), ensino VARCHAR(30), respostasCertas)',
              []
            );
          }
        }
      );
    });
  };

  const registrarDados = () => {
    console.log('Entrou');
    if (!userAge /* || !userDistrict || !typeOfSchool*/) {
      alert('Por favor, insira todos os dados para prosseguir');
      return;
    }
    if (isNaN(userAge)) {
      alert('Por favor, insira todos os dados para prosseguir');
      return;
    }
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO INFORMATION (idade, bairro, ensino) VALUES (?,?,?)',
        [userAge, userDistrict, typeOfSchool],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            console.log('Entrou2');
            Alert.alert(
              'Sucesso',
              'Dado inserido com sucesso',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('FirstQuestion'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Cadastro falhou');
          }
        }
      );
    });
  };

  useEffect(() => {
    dispatch(PerguntasActions.clearStore());
  }, []);

  useEffect(() => {
    createTable();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.background} behavior="height">
      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/denteImage.png')}
          resizeMode="contain"
          style={{ width: 200, height: 200, alignSelf: 'center' }}
        />
        <Text
          style={{
            fontSize: 40,
            color: '#ffffff',
            textAlign: 'center',
            paddingTop: 24,
          }}
        >
          Dental Quiz
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <TextInput
          label="Idade"
          value={userAge}
          onChangeText={(userAge) => setUserAge(userAge)}
          style={styles.textInput}
          keyboardType="numeric"
        />
        <TextInput
          label="Bairro"
          value={userDistrict}
          onChangeText={(userDistrict) => setUserDistrict(userDistrict)}
          style={styles.textInput}
        />
        <TextInput
          label="Ensino público ou particular"
          value={typeOfSchool}
          onChangeText={(typeOfSchool) => setTypeOfSchool(typeOfSchool)}
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.button} onPress={registrarDados}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#6E9AE6',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    marginVertical: 10,
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
});
