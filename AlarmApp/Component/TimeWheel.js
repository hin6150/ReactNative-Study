import React from 'react';
import WheelPicker from 'react-native-wheely';
import {Text, View} from 'react-native';

const TimeWheel = ({text, index, setIndex, options}) => {
  return (
    <View style={{display: 'flex', alignItems: 'center'}}>
      <Text>{text}</Text>
      <WheelPicker
        selectedIndex={index}
        options={options}
        onChange={index => setIndex(index)}
        itemTextStyle={{fontSize: 24}}
        containerStyle={{width: 100, margin: 20}}
        selectedIndicatorStyle={{
          backgroundColor: '#eee',
        }}
      />
    </View>
  );
};

export default TimeWheel;
