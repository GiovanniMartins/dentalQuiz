//import * as React from 'react';
import { View, Alert, Modal,KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text,StyleSheet, Animated,Keyboard, Button, ImageBackground } from 'react-native';
import React, {useEffect, useState} from 'react';
import {  useDispatch, useSelector  } from 'react-redux';
import { Creators as PerguntasActions } from '../store/ducks/perguntas';

const PerguntaQuatro = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleWrong, setModalVisibleWrong] = useState(false);
    const dispatch = useDispatch()

    const qtdAcertos = useSelector((store) => store.perguntas.qtdAcertos);

    const respostaCerta = () => {
        dispatch(PerguntasActions.salvarAcertos(1 + qtdAcertos));
        dispatch(PerguntasActions.salvarRespondidos(1));
        setModalVisible(!modalVisible);        
        navigation.navigate('FifthQuestion');
    }

    const respostaErrada = () => {
        dispatch(PerguntasActions.salvarRespondidos(1));
        setModalVisible(!modalVisible);
        navigation.navigate('FifthQuestion');
    }

    return(
        
        <View  style={styles.background}>
            <Text style={styles.title}>Quarta pergunta:</Text>
            <Text style={styles.backgroundQuestion}> Quantas vezes devemos escovar os dentes por dia?</Text>
           
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => setModalVisibleWrong(true)}>
                    <Text style={styles.buttonText}>1 vez ao acordar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setModalVisibleWrong(true)}
                    >
                    <Text style={styles.buttonText}>2 vezes durante o dia</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Sempre depois de comer</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setModalVisibleWrong(true)}
                    >
                    <Text style={styles.buttonText}>Quando quiser</Text>
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
                        <Text style={styles.modalText}>Muito bem, jovem!</Text>
                                 <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }} onPress={()=> respostaCerta()} >
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
                        <Text style={styles.modalText}>Lembre-se, é necessário SEMPRE que escovar os dentes usar depois o fio dental!</Text>
                                 <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }} onPress={() => {respostaErrada()}} >
                                 <Text style={styles.textStyle}>Continuar</Text>
                            </TouchableOpacity>
                    </View>
                </View>       
            </Modal>
        </View>
       )
    
}

export default PerguntaQuatro

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