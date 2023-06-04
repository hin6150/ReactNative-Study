import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AlramItemDay = ({day, text}) => {
  return day.map((item, idx) => {
    return (
      <View key={idx}>
        {item.check ? (
          <Text style={[text, styles.color]}>{item.text}</Text>
        ) : (
          <Text style={text}>{item.text}</Text>
        )}
      </View>
    );
  });
};

const styles = StyleSheet.create({color: {color: 'blue'}});
export default AlramItemDay;
