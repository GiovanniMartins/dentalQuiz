import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

//screens
import InitialScreen from './src/Cadastro/InitialScreen';
import FirstQuestion from './src/Perguntas/FirstQuestion';
import SecondQuestion from './src/Perguntas/SecondQuestion';
import ThirdQuestion from './src/Perguntas/ThirdQuestion';
import FourthQuestion from './src/Perguntas/FourthQuestion';
import FifthQuestion from './src/Perguntas/FifthQuestion';
import SixthQuestion from './src/Perguntas/SixthQuestion';
import SeventhQuestion from './src/Perguntas/SeventhQuestion';
import EighthQuestion from './src/Perguntas/EighthQuestion';
import NinethQuestion from './src/Perguntas/NinethQuestion';
import TenthQuestion from './src/Perguntas/TenthQuestion';
import Congratulations from './src/Perguntas/Congratulations';
import AvaliationOne from './src/Avaliacoes/AvaliationOne';
import HomeScreen from './src/Home/HomeScreen';
import AvaliationTwo from './src/Avaliacoes/AvaliationTwo';
import AvaliationThree from './src/Avaliacoes/AvaliationThree';
import ResultadoTodosDados from './src/Resultados/ResultadoTodosDados';
import ResultadoPorBairro from './src/Resultados/ResultadoPorBairro';
import ResultadoPorIdade from './src/Resultados/ResultadoPorIdade';
import ResultadoPorEnsino from './src/Resultados/ResultadoPorEnsino';

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="InitialScreen"
              component={InitialScreen}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="FirstQuestion"
              component={FirstQuestion}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SecondQuestion"
              component={SecondQuestion}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ThirdQuestion"
              component={ThirdQuestion}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="FourthQuestion"
              component={FourthQuestion}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="FifthQuestion"
              component={FifthQuestion}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SixthQuestion"
              component={SixthQuestion}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SeventhQuestion"
              component={SeventhQuestion}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="EighthQuestion"
              component={EighthQuestion}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NinethQuestion"
              component={NinethQuestion}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="TenthQuestion"
              component={TenthQuestion}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Congratulations"
              component={Congratulations}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="AvaliationOne"
              component={AvaliationOne}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="AvaliationTwo"
              component={AvaliationTwo}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="AvaliationThree"
              component={AvaliationThree}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ResultadoTotal"
              component={ResultadoTodosDados}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ResultadoBairro"
              component={ResultadoPorBairro}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ResultadoIdade"
              component={ResultadoPorIdade}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ResultadoEnsino"
              component={ResultadoPorEnsino}
              options={{
                title: '',
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
