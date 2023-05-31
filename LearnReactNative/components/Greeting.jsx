import React from 'react';
import {Text, View} from 'react-native';

const Greeting = ({style, name}) => {
  return (
    <View>
      <Text style={style}>안녕하세요 {name}</Text>
    </View>
  );
};

export default Greeting;
