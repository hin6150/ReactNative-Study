import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Switch,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import AlarmItemDay from './AlarmItemDay';

const AlarmItem = ({item, onToggle}) => {
  const {hour, min, id, toggle} = item;

  const [day, setDay] = useState([
    {text: '월', check: true},
    {text: '화', check: false},
    {text: '수', check: false},
    {text: '목', check: false},
    {text: '금', check: false},
    {text: '토', check: false},
    {text: '일', check: false},
  ]);
  return (
    <View style={styles.block}>
      <View style={styles.leftBlock}>
        <Text style={styles.text}>{hour > 12 ? '오후' : '오전'}</Text>
        <Text style={styles.text}>
          {hour > 12 ? hour - 12 : hour} : {min}
        </Text>
      </View>
      <View style={styles.rightBlock}>
        <AlarmItemDay day={day} text={styles.text}></AlarmItemDay>
        <Switch
          trackColor={{false: '#white', true: '#6200EE'}}
          thumbColor={'#f4f3f4'}
          onValueChange={() => onToggle(id)}
          value={toggle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    height: 72,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  leftBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  rightBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default AlarmItem;
