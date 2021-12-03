import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/Routes/Home';
import Inicio from './src/Routes/Inicio';
import Cadastro from './src/Routes/Cadastro';
import Remedio from './src/Routes/Remedio';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />

        <Drawer.Screen name="Início" component={Inicio} />

        <Drawer.Screen name="Cadastro" component={Cadastro} />

        <Drawer.Screen name="Remédio" component={Remedio} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
