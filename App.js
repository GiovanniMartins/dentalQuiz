import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

//import useCachedResources from './hooks/useCachedResources';
//import useDatabase from './hooks/useDatabase'

//screens                        
import  InitialScreen   from './src/InitialScreen'; 
import  FirstQuestion   from './src/FirstQuestion';
import  SecondQuestion  from './src/SecondQuestion';
import  ThirdQuestion   from './src/ThirdQuestion';
import  FourthQuestion  from './src/FourthQuestion';
import  FifthQuestion  from './src/FifthQuestion';
import  SixthQuestion  from './src/SixthQuestion';
import  SeventhQuestion  from './src/SeventhQuestion';
import  EighthQuestion  from './src/EighthQuestion';
import  NinethQuestion  from './src/NinethQuestion';
import  TenthQuestion  from './src/TenthQuestion';
import  Congratulations from './src/Congratulations';
import  AvaliationOne from './src/AvaliationOne';
import  HomeScreen from './src/HomeScreen';
import  AvaliationTwo from './src/AvaliationTwo';
import  AvaliationThree from './src/AvaliationThree';
import ListaTodosDados from './src/ListaTodosDados';
import ListaPorBairro from './src/ListaPorBairro';
import ListaPorIdade from './src/ListaPorIdade';
import ListaPorEnsino from './src/ListaPorEnsino';

//<Stack.Screen name="AvaliationOne" component={AvaliationOne}/>
 //       <Stack.Screen name="AvaliationTwo" component={AvaliationTwo}/>
 //       <Stack.Screen name="AvaliationThree" component={AvaliationThree}/>
  //      <Stack.Screen name="AvaliationFour" component={AvaliationFour}/>

const Stack = createStackNavigator();
                             //add
export default function App(propos){
//add
 // SplashScreen.preventAutoHideAsync();

//add
 // if (isLoadingComplete && isDBLoadingComplete) {
  //  SplashScreen.hideAsync();

    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="InitialScreen" component={InitialScreen}/>
          <Stack.Screen name="FirstQuestion" component={FirstQuestion}/>
          <Stack.Screen name="SecondQuestion" component={SecondQuestion}/>
          <Stack.Screen name="ThirdQuestion" component={ThirdQuestion}/>
          <Stack.Screen name="FourthQuestion" component={FourthQuestion}/>
          <Stack.Screen name="FifthQuestion" component={FifthQuestion}/>
          <Stack.Screen name="SixthQuestion" component={SixthQuestion}/>
          <Stack.Screen name="SeventhQuestion" component={SeventhQuestion}/>
          <Stack.Screen name="EighthQuestion" component={EighthQuestion}/>
          <Stack.Screen name="NinethQuestion" component={NinethQuestion}/>
          <Stack.Screen name="TenthQuestion" component={TenthQuestion}/>
          <Stack.Screen name="Congratulations" component={Congratulations}/>
          <Stack.Screen name="AvaliationOne" component={AvaliationOne}/>
          <Stack.Screen name="AvaliationTwo" component={AvaliationTwo}/>
          <Stack.Screen name="AvaliationThree" component={AvaliationThree}/>
          <Stack.Screen name="ListaTodosDados" component={ListaTodosDados}/>
          <Stack.Screen name="ListaPorBairro" component={ListaPorBairro}/>
          <Stack.Screen name="ListaPorIdade" component={ListaPorIdade}/>
          <Stack.Screen name="ListaPorEnsino" component={ListaPorEnsino}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
    //add
 // } else {
 //   return null;
//  }
}