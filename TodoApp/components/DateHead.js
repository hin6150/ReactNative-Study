import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

const DateHead = ({date}) => {
  const dateFormat = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
  const formatted = `${dateFormat.year}년 ${dateFormat.month}월 ${dateFormat.day}일`;
  return (
    <>
      <StatusBar backgroundColor="#26a69a" barStyle="light-content" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formatted}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
