//import * as React from 'react';
import { View, Alert, Modal,KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text,StyleSheet, Animated,Keyboard, Button, ImageBackground } from 'react-native';
//import React, {Component} from 'react';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import perguntas, { Creators as PerguntasActions } from '../store/ducks/perguntas';


//import  SecondQuestion  from './src/SecondQuestion';

const PerguntaOito = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleWrong, setModalVisibleWrong] = useState(false);
    const dispatch = useDispatch()

    const qtdAcertos = useSelector((store) => store.perguntas.qtdAcertos);

    const respostaCerta = () => {
        dispatch(PerguntasActions.salvarAcertos(1 + qtdAcertos));
        dispatch(PerguntasActions.salvarRespondidos(1));
        setModalVisible(!modalVisible);        
        navigation.navigate('NinethQuestion');      
    }

    const respostaErrada = () => {
        dispatch(PerguntasActions.salvarRespondidos(1));
        setModalVisible(!modalVisible);
        navigation.navigate('NinethQuestion');
    }

    return(
        
        <View  style={styles.background}>
            <View>
                <View>
                    <Text style={styles.backgroundQuestion}>Chiclete faz mal aos dentes?</Text>
                </View>
            </View>
            
            <View style ={styles.backView}>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>
                        SIM
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisibleWrong(true)}>
                    <Text style={styles.buttonText}>
                        NÃO
                    </Text>
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
                        <Text style={styles.modalText}>Acertou, jovem!</Text>
                            <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }} onPress={() => respostaCerta()}  >
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
                        <Text style={styles.modalText}>Errou, jovem!</Text>
                            <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }} onPress={() => respostaErrada()} >
                                 <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableOpacity>
                    </View>
                </View>       
            </Modal>
        </View>
       )
}

export default PerguntaOito

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
        marginTop:-230,
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
        shadowColor: '#458070' 
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }

})