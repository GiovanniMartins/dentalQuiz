//import * as React from 'react';
import { View, Alert, Modal,KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text,StyleSheet, Animated,Keyboard, Button, ImageBackground } from 'react-native';
import React, {Component} from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';



export default class FifthQuestion extends Component {
    //const imageCorrect = require('...')
    //const imageCorrect = require('...')
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

    render(){
    const { modalVisible } = this.state;
    const { modalVisibleWrong } = this.state;
    const { navigation } = this.props
       return(
        
        <View  style={styles.background}>
            <View>
                <View>
                    <Text style={styles.backgroundQuestion}>Qual o principal alimento que causa cárie?</Text>
                </View>
            </View>
            
            <View style ={styles.backView}>
                <TouchableOpacity style = {styles.backgroundTouchableOpacity} onPress={() => {this.setModalVisible(true);}}>
                    <Image source={require('../assets/brigadeiro.png')}
                        style={{ width: 130, height: 130}}/> 
                        
                </TouchableOpacity>

                <TouchableOpacity style = {styles.backgroundTouchableOpacity2} onPress={() => {this.setModalVisibleWrong(true);}}>
                    <Image source={require('../assets/pao.png')}
                        style={{ width: 130, height: 130 }}/> 
                </TouchableOpacity>
            </View>
            <View style ={styles.backView2}>
                <TouchableOpacity style = {styles.backgroundTouchableOpacity} onPress={() => {this.setModalVisibleWrong(true);}}>
                    <Image source={require('../assets/alface.png')}
                        style={{ width: 130, height: 130}}/> 
                </TouchableOpacity>

                <TouchableOpacity style = {styles.backgroundTouchableOpacity2} onPress={() => {this.setModalVisibleWrong(true);}}>
                    <Image source={require('../assets/agua.png')}
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
                        <Image source={require('../assets/dentinhoFeliz.png')} style={styles.imageModal} /> 
                        <Text style={styles.modalText}>Acertou, jovem!</Text>
                                 <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }} onPress={()=>{navigation.navigate('SixthQuestion'); this.setModalVisible(!modalVisible);}} >
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
                        <Image source={require('../assets/dentinhoFeliz.png')} style={styles.imageModal} /> 
                        <Text style={styles.modalText}>Errou, jovem!</Text>
                                 <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }} onPress={() => {this.setModalVisibleWrong(!modalVisibleWrong);}} >
                                 <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableOpacity>
                    </View>
                </View>       
            </Modal>
        </View>
       )
    }
}
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