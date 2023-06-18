import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {weekString} from '../../storages/formatData';

const AlarmItemDay = ({week, text}) => {
  return week.map((item, idx) => (
    <View key={idx}>
      {item ? (
        <Text style={[text, styles.color]}>{weekString[idx]}</Text>
      ) : (
        <Text style={text}>{weekString[idx]}</Text>
      )}
    </View>
  ));
};

const styles = StyleSheet.create({color: {color: 'blue'}});
export default AlarmItemDay;
