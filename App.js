import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';


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
import AvaliationOne from './src/AvaliationOne';
//<Stack.Screen name="AvaliationOne" component={AvaliationOne}/>
 //       <Stack.Screen name="AvaliationTwo" component={AvaliationTwo}/>
 //       <Stack.Screen name="AvaliationThree" component={AvaliationThree}/>
  //      <Stack.Screen name="AvaliationFour" component={AvaliationFour}/>

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialScreen">
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
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}