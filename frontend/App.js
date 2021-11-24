import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Routes/Home';
import Inicio from './src/Routes/Inicio';
import Cadastro from './src/Routes/Cadastro';
import Remedio from './src/Routes/Remedio';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Inicio" component={Inicio} />

        <Stack.Screen name="Cadastro" component={Cadastro} />

        <Stack.Screen name="Remedio" component={Remedio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
