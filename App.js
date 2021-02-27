
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  View,
} from 'react-native';
import Routes from './Routes/Routes';

function App (){
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};


export default App;
