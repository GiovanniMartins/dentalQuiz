//import * as React from 'react';
import { View, Alert, Modal,KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text,StyleSheet, Animated,Keyboard, Button, ImageBackground } from 'react-native';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as SQLite from 'expo-sqlite'; 
const  db = SQLite.openDatabase('Dados.db');


//import  SecondQuestion  from './src/SecondQuestion';

const Congratulations =({ navigation }) => {
    //const imageCorrect = require('...')
    //const imageCorrect = require('...')
    const qtdAcertos = useSelector((store) => store.perguntas.qtdAcertos);
    const insereRespostasCertas = () => {
        // 'UPDATE INFORMATION SET respostasCertas=? ORDER BY student_id DESC LIMIT 1',
        console.log("Entrou no banco" + qtdAcertos);
         db.transaction(function(tx) {
           tx.executeSql(
             'UPDATE INFORMATION SET respostasCertas=? WHERE student_id = (SELECT MAX(student_id) FROM INFORMATION)',
             [qtdAcertos],
             (tx, results) => {
               console.log('Results', results.rowsAffected);
               if(results.rowsAffected > 0){ 
                 console.log("Atualizou resposta");
                 Alert.alert(
                   'Sucesso',
                   'Dado inserido com sucesso',
                   [
                     {
                       text: 'Ok',
                       onPress: () => navigation.navigate('InitialScreen'),
                     },
                   ],
                   { cancelable: false }
                 );
               } else {alert('Cadastro falhou')};
             }, console.log("IH RAPAZ")
           );
         });
       }
    state = {
        modalVisible: false,
        modalVisibleWrong: false
    };
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    setModalVisibleWrong = (visible) => {
        this.setState({ modalVisibleWrong: visible });
    }
       return(
        
        <View  style={styles.background}>
            <Text style={styles.backgroundQuestion}>Parabéns você finalizou nossa avaliação, devolva o aparelho para o profissional</Text>
          
            
            <View style={styles.containerLogo}>
                
                    <Animated.Image
                        source={require('../../assets/denteImage.png')}
                        style={{ width: 127, height:127 }}
                    /> 
                    <Button style={styles.button}
                            title="Seguir"
                            onPress={()=> insereRespostasCertas()}
                    />
                
            </View>
        </View>
       )
    }
export default Congratulations

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 100,
    backgroundColor: '#6E9AE6',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  backgroundQuestion: {
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center',
  },
  backgroundTouchableOpacity: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    borderWidth: 1,
  },
  backView: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  modalView: {
    marginTop: 150,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginVertical: 15,
    textAlign: 'center',
    fontSize: 22,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  openButton: {
    width: '80%',
    backgroundColor: '#3A5D99',
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
    elevation: 2,
  },
  imageModal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 130,
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

