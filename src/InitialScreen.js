import 'react-native-gesture-handler';
import React,{useState, useEffect} from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text,StyleSheet, Animated,Keyboard, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const AnimatedIcon = Animatable.createAnimatableComponent(Icon)

export default function InitialScreen({navigation}) {
    const[offset]=useState(new Animated.ValueXY({x:0, y:80}))
    const[logo]=useState(new Animated.ValueXY({x:200,y:200}))
    const titleGame = "DentalQuiz"
    useEffect(()=>{
      keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',keyboardDidShow);
      keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',keyboardDidHide);
      Animated.spring(offset.y,{
          toValue: 0,
          speed: 4,
          bounciness: 30
        }).start();
    },[]);
    
    
    function keyboardDidShow(){
      Animated.parallel([
        Animated.timing(logo.x,{toValue:55,duration:100}),
        Animated.timing(logo.y,{
          toValue: 65,
          duration:100
        }),
      ]).start();
    }
  
    function keyboardDidHide(){
      Animated.parallel([
        Animated.timing(logo.x,{toValue:200,duration:100}),
        Animated.timing(logo.y,{
          toValue: 200,
          duration:100
        }),
      ]).start();
    }
    return (
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <Animated.Image
            source={require('../assets/dentinhoFeliz.png')}
            style={{ width: logo.x, height: logo.y }}
          /> 
          <Text style={{fontSize: 40, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch',}}>
            {titleGame}
          </Text>
           
        </View>
        <Animated.View style=
        {
          [styles.container,
            {transform:
              [
                {translateY: offset.y
                }
              ]
            }
          ]
        }>
          <TextInput 
          style={styles.input}
          placeholder="Idade"
          onChangeText={()=>{}}
          />
          <TouchableOpacity style={styles.btnSubmit}>
            <Button
            title="StartGame"
            onPress={()=>navigation.navigate('FirstQuestion')}
            />
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    );
  }
  
  const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#8bf0d5'
    },
    containerLogo:{
      flex:1,
      justifyContent: 'center',
    },
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
    },
    input:{
      backgroundColor: '#FFF',
      width: '90%',
      marginBottom: 50,
      color: '#222',
      fontSize:  15,
      borderRadius: 30,
      padding: 10,
      marginTop:-20
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