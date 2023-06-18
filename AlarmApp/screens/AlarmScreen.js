import React, {useEffect, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import AlarmList from '../component/AlarmList';
import alarmStorage from '../storages/alarmStorage';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import AlarmContext from '../contexts/AlarmContext';

const AlarmScreen = () => {
  const {alarms, onToggle, onRemove} = useContext(AlarmContext);

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
