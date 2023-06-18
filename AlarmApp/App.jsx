import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import AlarmAddScreen from './screens/AlarmAddScreen';
import {AlarmContextProvider} from './contexts/AlarmContext';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AlarmContextProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Add" component={AlarmAddScreen} />
        </Stack.Navigator>
      </AlarmContextProvider>
    </NavigationContainer>
  );
};

export default App;
