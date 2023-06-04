import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import AlramList from './Component/AlramList';

const App = () => {
  const [alrams, setAlrams] = useState([
    {id: 0, hour: 13, min: 57, week: [], toggle: true},
    {id: 1, hour: 11, min: 53, week: [], toggle: false},
    {id: 2, hour: 9, min: 53, week: [], toggle: false},
    {id: 3, hour: 19, min: 53, week: [], toggle: false},
  ]);

  const onToggle = id => {
    const nextAlrams = alrams.map(alram =>
      alram.id === id ? {...alram, toggle: !alram.toggle} : alram,
    );
    setAlrams(nextAlrams);
  };
  return (
    <SafeAreaView style={styles.list}>
      <View style={styles.box}>
        <Text style={styles.title}>ReactNative 알람 앱</Text>
      </View>
      <View
        style={{
          flexDirection: 'row-reverse',
          marginLeft: 20,
        }}>
        <TouchableNativeFeedback>
          <View
            style={{
              width: 32,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 32}}>+</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <AlramList alrams={alrams} onToggle={onToggle}></AlramList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
  list: {
    backgroundColor: '#e0e0e0',
    flex: 1,
  },
});

export default App;
