import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import ToastModule from './Toast';

const App = () => {
  const onPress = () => {
    console.log('click');
    ToastModule.show('Hello World', ToastModule.SHORT);
  };
  return (
    <SafeAreaView>
      <Button title="Press me" onPress={onPress} />
    </SafeAreaView>
  );
};

export default App;
