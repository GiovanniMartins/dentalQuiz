import 'react-native-gesture-handler';
import React,{useState, useEffect} from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text,StyleSheet, Animated,Keyboard, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import * as SQLite from 'expo-sqlite'; 
import { useDispatch } from 'react-redux';
import { Creators as PerguntasActions } from '../store/ducks/perguntas';

const  db = SQLite.openDatabase('Dados.db'); // cria o banco de dados e se existir inicia o BD

const AnimatedIcon = Animatable.createAnimatableComponent(Icon)

export default function InitialScreen({navigation}) {
    const dispatch = useDispatch()
    const[offset]=useState(new Animated.ValueXY({x:0, y:80}))
    const[logo]=useState(new Animated.ValueXY({x:200,y:200}))
    const titleGame = "DentalQuiz"
    let [userAge, setUserAge] = useState('');
    let [userDistrict, setUserDistrict] = useState('');
    let [typeOfSchool, setTypeOfSchool] = useState('');

    const createTable = () => {
      db.transaction(function (txn) {
        txn.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='information'", [], 
        function (tx,res) {
          console.log('item:', res.rows.length);
         // txn.executeSql('DROP TABLE IF EXISTS INFORMATION', []);
          if(res.rows.length == 0) {
            txn.executeSql('CREATE TABLE IF NOT EXISTS information(student_id INTEGER PRIMARY KEY AUTOINCREMENT, idade VARCHAR(30), bairro VARCHAR(30), ensino VARCHAR(30))',[]);
          }
        });
      }) 
    }

    const registrar_dados = () => {
      console.log("Entrou");
      if (!userAge /* || !userDistrict || !typeOfSchool*/) {
        alert('Por favor, insira todos os dados para prosseguir');
        return;
      } if (isNaN(userAge)) {
         alert('Por favor, insira todos os dados para prosseguir');
        return;
      }
      db.transaction(function(tx) {
        tx.executeSql(
          'INSERT INTO INFORMATION (idade, bairro, ensino) VALUES (?,?,?)',
          [userAge, userDistrict, typeOfSchool],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if(results.rowsAffected > 0){ 
              console.log("Entrou2");
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
            } else {alert('Cadastro falhou')};
          }
        );
      });
    };

    useEffect(() => {
      dispatch(PerguntasActions.clearStore());
    },[])

    useEffect(()=> {
      createTable();
      keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',keyboardDidShow);
      keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',keyboardDidHide);
      Animated.spring(offset.y,{
          toValue: 0,
          speed: 4,
          bounciness: 30
        }).start();
    },[]);
    
/*    function registerAgeDistrict(){
       Information.create(userAge);
    }*/
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
            source={require('../../assets/dentinhoFeliz.png')}
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
          onChangeText={(userAge)=>setUserAge(userAge)}
          />
          <TextInput 
          style={styles.input}
          placeholder="Bairro"
          onChangeText={(userDistrict)=>setUserDistrict(userDistrict)}
          />
          <TextInput 
          style={styles.input}
          placeholder="Ensino público ou particular"
          onChangeText={(typeOfSchool)=>setTypeOfSchool(typeOfSchool)}
          />
          <TouchableOpacity style={styles.btnSubmit}>
            <Button
            title="Cadastrar"
            onPress={registrar_dados}
                    
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