import React from 'react';
import AlarmItem from './AlarmItem';
import {FlatList, StyleSheet, View} from 'react-native';

const AlarmList = ({alarms, onToggle}) => {
  return (
    <FlatList
      data={alarms}
      renderItem={({item}) => <AlarmItem item={item} onToggle={onToggle} />}
      keyExtractor={item => item.id.toString()}></FlatList>
  );
};

export default AlarmList;
