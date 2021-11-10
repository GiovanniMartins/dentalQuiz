import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Provider } from 'react-redux';
import {store, persistor} from './src/store';
import { PersistGate } from 'redux-persist/integration/react';


//screens                        
import  InitialScreen   from './src/Cadastro/InitialScreen'; 
import  FirstQuestion   from './src/Perguntas/FirstQuestion';
import  SecondQuestion  from './src/Perguntas/SecondQuestion';
import  ThirdQuestion   from './src/Perguntas/ThirdQuestion';
import  FourthQuestion  from './src/Perguntas/FourthQuestion';
import  FifthQuestion  from './src/Perguntas/FifthQuestion';
import  SixthQuestion  from './src/Perguntas/SixthQuestion';
import  SeventhQuestion  from './src/Perguntas/SeventhQuestion';
import  EighthQuestion  from './src/Perguntas/EighthQuestion';
import  NinethQuestion  from './src/Perguntas/NinethQuestion';
import  TenthQuestion  from './src/Perguntas/TenthQuestion';
import  Congratulations from './src/Perguntas/Congratulations';
import  AvaliationOne from './src/Avaliacoes/AvaliationOne';
import  HomeScreen from './src/Home/HomeScreen';
import  AvaliationTwo from './src/Avaliacoes/AvaliationTwo';
import  AvaliationThree from './src/Avaliacoes/AvaliationThree';
import ListaTodosDados from './src/Listagem/ListaTodosDados';
import ListaPorBairro from './src/Listagem/ListaPorBairro';
import ListaPorIdade from './src/Listagem/ListaPorIdade';
import ListaPorEnsino from './src/Listagem/ListaPorEnsino';

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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen" >
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                  title: "",
                  headerShown: true,
                }}/>
          <Stack.Screen name="InitialScreen" component={InitialScreen} options={{
                  title: "",
                  headerShown: true,
                }}/>
          <Stack.Screen name="FirstQuestion" component={FirstQuestion} optinos={{
                  title: "",
                  headerShown: true,
          }}/>
          <Stack.Screen name="SecondQuestion" component={SecondQuestion} optinos={{
                  title: "",
                  headerShown: true,
          }}/>
          <Stack.Screen name="ThirdQuestion" component={ThirdQuestion} optinos={{
                  title: "",
                  headerShown: true,
          }}/>
          <Stack.Screen name="FourthQuestion" component={FourthQuestion} optinos={{
                  title: "",
                  headerShown: true,
          }}/>
          <Stack.Screen name="FifthQuestion" component={FifthQuestion} optinos={{
                  title: "",
                  headerShown: true,
          }}/>
          <Stack.Screen name="SixthQuestion" component={SixthQuestion} optinos={{
                  title: "",
                  headerShown: true,
          }}/>
          <Stack.Screen name="SeventhQuestion" component={SeventhQuestion} optinos={{
                  title: "",
                  headerShown: true,
          }}/>
          <Stack.Screen name="EighthQuestion" component={EighthQuestion} optinos={{
                  title: "",
                  headerShown: true,
          }}/>
          <Stack.Screen name="NinethQuestion" component={NinethQuestion} optinos={{
                  title: "",
                  headerShown: true,
          }}/>
          <Stack.Screen name="TenthQuestion" component={TenthQuestion} optinos={{
                  title: "",
                  headerShown: true,
          }}/>
          <Stack.Screen name="Congratulations" component={Congratulations} optinos={{
                  title: "",
                  headerShown: true,
          }}/>
          <Stack.Screen name="AvaliationOne" component={AvaliationOne}/>
          <Stack.Screen name="AvaliationTwo" component={AvaliationTwo}/>
          <Stack.Screen name="AvaliationThree" component={AvaliationThree}/>
          <Stack.Screen name="ListaTodosDados" component={ListaTodosDados}/>
          <Stack.Screen name="ListaPorBairro" component={ListaPorBairro}/>
          <Stack.Screen name="ListaPorIdade" component={ListaPorIdade}/>
          <Stack.Screen name="ListaPorEnsino" component={ListaPorEnsino}/>
        </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
      </Provider>
    )
    //add
 // } else {
 //   return null;
//  }
}