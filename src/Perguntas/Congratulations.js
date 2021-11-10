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
            <View>
                <View>
                    <Text style={styles.backgroundQuestion}>Parabéns você finalizou nossa avaliação, devolva o aparelho para o profissional</Text>
                </View>
            </View>
            
            <View style={styles.containerLogo}>
                
                    <Animated.Image
                        source={require('../../assets/dentinhoFeliz.png')}
                        style={{ width: 127, height:127 }}
                    /> 
                    <Button style={styles.btnSubmit}
                            title="Seguir"
                            onPress={()=> insereRespostasCertas()}
                    />
                
            </View>
        </View>
       )
    }
export default Congratulations
const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#8bf0d5'
    },
    backgroundQuestion:{
        backgroundColor: '#84a5c4',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-130,
        height: 90,
        borderRadius: 20,
        color: '#222',
        fontSize:  25
     
    },
    backgroundTouchableOpacity:{
        justifyContent: 'center',
        borderWidth : 1,
        height : 170,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
        marginRight: '10%',
       
        height : 130,
        width : 130,
       
    },
    backgroundTouchableOpacity2:{
        justifyContent: 'center',
        borderWidth : 1,
        height : 130,
        width : 130,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
     
    },
    backView:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop:50,
         
    },
    backView2:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop:20,
      
    },
    modalView:{
        marginTop: 150,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
    imageModal: {
        justifyContent: "center",
        alignItems: "center",
        width: 130, 
        height: 130 
    },
    btnSubmit:{
        backgroundColor: '#8bf0d5',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
      }

})