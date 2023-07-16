import React from 'react';
import PlayPage from './pages/PlayPage';
import MainPage from './pages/MainPage';
import CharacterSelectPage from './pages/CharacterSelectPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="CharacterSelect" component={CharacterSelectPage} />
        <Stack.Screen name="Play" component={PlayPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
