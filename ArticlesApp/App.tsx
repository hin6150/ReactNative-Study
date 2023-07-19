import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/Rootstack';

function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
