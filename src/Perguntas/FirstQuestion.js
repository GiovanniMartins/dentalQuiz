//import * as React from 'react';
import {
  View,
  Alert,
  Modal,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Keyboard,
  Button,
  ImageBackground,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import perguntas, {
  Creators as PerguntasActions,
} from '../store/ducks/perguntas';

const PerguntaUm = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleWrong, setModalVisibleWrong] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //     if (respondidoState == 1) {
  //         Alert.alert(
  //             "Pergunta já respondida!",
  //             "Siga para a próxima pergunta",
  //             [
  //               { text: "OK", onPress: () => navigation.navigate('SecondQuestion') }
  //             ]
  //           );
  //     }
  // },[respondidoState])

  const qtdAcertos = useSelector((store) => store.perguntas.qtdAcertos);
  console.log(qtdAcertos + ' Acertos');

  const respostaCerta = () => {
    dispatch(PerguntasActions.salvarAcertos(1 + qtdAcertos));
    dispatch(PerguntasActions.salvarRespondidos(1));
    setModalVisible(!modalVisible);
    navigation.navigate('SecondQuestion');
  };

  const respostaErrada = () => {
    dispatch(PerguntasActions.salvarRespondidos(1));
    setModalVisible(!modalVisible);
    navigation.navigate('SecondQuestion');
  };

  return (
    <View style={styles.background}>
      <Text style={styles.title}>Primeira pergunta:</Text>

      <Text style={styles.backgroundQuestion}>
        Quantas vezes devemos escovar os dentes por dia?
      </Text>

      <View style={styles.backView}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={require('../../assets/1.png')}
            style={{ width: 130, height: 130 }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backgroundTouchableOpacity}
          onPress={() => setModalVisibleWrong(true)}
        >
          <Image
            source={require('../../assets/2.png')}
            style={{ width: 130, height: 130 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.backView}>
        <TouchableOpacity
          style={styles.backgroundTouchableOpacity}
          onPress={() => setModalVisibleWrong(true)}
        >
          <Image
            source={require('../../assets/3.png')}
            style={{ width: 130, height: 130 }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backgroundTouchableOpacity}
          onPress={() => setModalVisibleWrong(true)}
        >
          <Image
            source={require('../../assets/4.png')}
            style={{ width: 130, height: 130 }}
          />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View>
          <View style={styles.modalView}>
            <Image
              source={require('../../assets/respostaCerta.png')}
              style={styles.imageModal}
              resizeMode="contain"
            />
            <Text style={styles.modalText}>Parabéns! Resposta certa!</Text>
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => respostaCerta()}
            >
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
          Alert.alert('Modal has been closed.');
        }}
      >
        <View>
          <View style={styles.modalView}>
            <Image
              source={require('../../assets/respostaErrada.png')}
              style={styles.imageModal}
            />
            <Text style={styles.modalText}>Opa! Resposta errada!</Text>
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => {
                respostaErrada();
              }}
            >
              <Text style={styles.textStyle}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PerguntaUm;

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
});
