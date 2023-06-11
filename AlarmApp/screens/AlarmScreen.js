import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import AlarmList from '../Component/AlarmList';
import alarmStorage from '../storages/alarmStorage';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

const AlarmScreen = () => {
  const [alarms, setAlrams] = useState([
    {id: 0, hour: 13, min: 57, week: [], toggle: true},
    {id: 1, hour: 11, min: 53, week: [], toggle: false},
    {id: 2, hour: 9, min: 53, week: [], toggle: false},
    {id: 3, hour: 19, min: 53, week: [], toggle: false},
  ]);

  useEffect(() => {
    alarmStorage.get().then(setAlrams).catch(console.error);
  }, []);

  useEffect(() => {
    alarmStorage.set(alarms).catch(console.error);
  }, [alarms]);

  const onToggle = id => {
    const nextAlrams = alarms.map(alram =>
      alram.id === id ? {...alram, toggle: !alram.toggle} : alram,
    );
    setAlrams(nextAlrams);
  };

  const onRemove = id => {
    const nextAlrams = alarms.filter(alarm => alarm.id !== id);
    setAlrams(nextAlrams);
  };

  const navigator = useNavigation();

  return (
    <SafeAreaView style={styles.list}>
      <View style={styles.box}>
        <Text style={styles.title}>ReactNative 알람 앱</Text>
      </View>
      <View style={{flexDirection: 'row-reverse', marginLeft: 20}}>
        <View
          style={{
            borderRadius: 25,
            width: 32,
            overflow: 'hidden',
          }}>
          <TouchableNativeFeedback onPress={() => navigator.navigate('Add')}>
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
      </View>

      {alarms.length > 0 ? (
        <AlarmList
          alarms={alarms}
          onToggle={onToggle}
          onRemove={onRemove}></AlarmList>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 32,
            }}>
            알람을 등록해주세요!
          </Text>
        </View>
      )}
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

export default AlarmScreen;
