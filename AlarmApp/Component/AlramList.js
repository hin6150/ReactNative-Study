import React from 'react';
import AlramItem from './AlramItem';
import {FlatList, StyleSheet, View} from 'react-native';

const AlramList = ({alrams, onToggle}) => {
  return (
    <FlatList
      data={alrams}
      renderItem={({item}) => <AlramItem item={item} onToggle={onToggle} />}
      keyExtractor={item => item.id.toString()}></FlatList>
  );
};

export default AlramList;
