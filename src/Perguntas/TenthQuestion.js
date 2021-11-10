//import * as React from 'react';
import { View, Alert, Modal,KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text,StyleSheet, Animated,Keyboard, Button, ImageBackground } from 'react-native';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import perguntas, { Creators as PerguntasActions } from '../store/ducks/perguntas';
import * as SQLite from 'expo-sqlite'; 
import { State } from 'react-native-gesture-handler';
const  db = SQLite.openDatabase('Dados.db');

const PerguntaDez = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleWrong, setModalVisibleWrong] = useState(false);
    const dispatch = useDispatch()
    let [userAnswer, setUserAnswer] = useState('');

    const qtdAcertos = useSelector((store) => store.perguntas.qtdAcertos);

    const respostaCerta = () => {
        dispatch(PerguntasActions.salvarAcertos(1 + qtdAcertos));
        dispatch(PerguntasActions.salvarRespondidos(1));
        setModalVisible(!modalVisible); 
       // insereRespostasCertas();
       // {(userDistrict)=>setUserDistrict(userDistrict)}
        navigation.navigate('Congratulations');      
    }

    const respostaErrada = () => {
        dispatch(PerguntasActions.salvarRespondidos(1));
        setModalVisible(!modalVisible);
        insereRespostasCertas();
       // navigation.navigate('InitialScreen');
        navigation.navigate('Congratulations');
    }

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

    return(
        
        <View  style={styles.background}>
            <View>
                <View>
                    <Text style={styles.backgroundQuestion}>Sua escola tem orientação sobre cuidado com os dentes?</Text>
                </View>
            </View>
            
            <View style ={styles.backView}>
                <TouchableOpacity style = {styles.backgroundTouchableOpacity} onPress={() => {setModalVisible(true);}}>
                    <Image source={require('../../assets/certo.png')}
                        style={{ width: 130, height: 130}}/> 
                        
                </TouchableOpacity>

                <TouchableOpacity style = {styles.backgroundTouchableOpacity2} onPress={() => {setModalVisibleWrong(true);}}>
                    <Image source={require('../../assets/errado.png')}
                        style={{ width: 130, height: 130 }}/> 
                </TouchableOpacity>
            </View>
            <Modal  
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}>
                <View>
                    <View style={styles.modalView}>
                        <Image source={require('../../assets/dentinhoFeliz.png')} style={styles.imageModal} /> 
                        <Text style={styles.modalText}>Excelente, jovem!</Text>
                            <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }} onPress={()=> respostaCerta()}  >
                                 <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableOpacity>
                    </View>
                </View>       
            </Modal>
            <Modal  
                    animationType="slide"
                    transparent={true}
                    visible={modalVisibleWrong}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}>
                <View>
                    <View style={styles.modalView}>
                        <Image source={require('../../assets/dentinhoFeliz.png')} style={styles.imageModal} /> 
                        <Text style={styles.modalText}>Toda escola deve ter, peça a seus pais para cobrarem da sua escola!</Text>
                            <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }} onPress={() => respostaErrada()} >
                                 <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableOpacity>
                    </View>
                </View>       
            </Modal>
        </View>
       )
}

export default PerguntaDez

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
        marginTop:-150,
        height: 81,
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
    }

})