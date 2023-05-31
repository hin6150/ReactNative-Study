import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import Greeting from './components/Greeting';

const App = () => {
  const [value, setValue] = useState('large');

  const handlePress = () => {
    setValue('small');
  };
  return (
    <SafeAreaView style={styles.full}>
      <View style={[styles.container, styles.rounded, sizes[value]]}></View>
      <Greeting name="Props" style={styles.title}></Greeting>
      <Button title="입력" onPress={handlePress}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {flex: 1, backgroundColor: 'cyan'},
  container: {
    backgroundColor: 'black',
    color: 'white',
    borderWidth: 10,
    borderStyle: 'solid',
    borderColor: 'blue',
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rounded: {
    borderRadius: 32,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export default App;
