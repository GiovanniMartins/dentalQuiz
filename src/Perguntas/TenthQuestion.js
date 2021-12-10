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
            <Text style={styles.backgroundQuestion}>Decima pergunta</Text>
            <Text style={styles.backgroundQuestion}>Você acha que a escola deveria ter orientação sobre escovação de dentes?</Text>
            
            
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.buttonText}>
                        Sim
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => setModalVisibleWrong(true)}
                >
                    <Text style={styles.buttonText}>
                        Não
                    </Text>
                </TouchableOpacity>
            <Modal  
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}>
                <View>
                    <View style={styles.modalView}>
                        <Image source={require('../../assets/respostaCerta.png')} style={styles.imageModal} /> 
                        <Text style={styles.modalText}>Perfeito</Text>
                            <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }} onPress={()=> respostaCerta()}  >
                                 <Text style={styles.textStyle}>Continuar</Text>
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
                        <Image source={require('../../assets/respostaErrada.png')} style={styles.imageModal} /> 
                        <Text style={styles.modalText}>Toda escola deve ter orientação, peça a seus pais para cobrarem da sua escola!</Text>
                            <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }} onPress={() => respostaErrada()} >
                                 <Text style={styles.textStyle}>Continuar</Text>
                            </TouchableOpacity>
                    </View>
                </View>       
            </Modal>
        </View>
       )
}

export default PerguntaDez

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

})