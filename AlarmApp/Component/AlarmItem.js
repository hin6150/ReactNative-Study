import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import AlarmItemDay from './AlarmItemDay';
import {useNavigation} from '@react-navigation/native';

const AlarmItem = ({item, onToggle}) => {
  const {hour, min, id, week, toggle} = item;
  const navigation = useNavigation();

  const pressHandle = () => {
    navigation.navigate('Add', {
      item,
    });
  };

  return (
    <Pressable
      style={styles.block}
      android_ripple={{color: '#ededed'}}
      onPress={pressHandle}>
      <View style={styles.leftBlock}>
        <Text style={styles.text}>{hour > 12 ? '오후' : '오전'}</Text>
        <Text style={styles.text}>
          {hour > 12 ? hour - 12 : hour} : {min}
        </Text>
      </View>
      <View style={styles.rightBlock}>
        <AlarmItemDay week={week} text={styles.text}></AlarmItemDay>
        <Switch
          trackColor={{false: '#white', true: '#6200EE'}}
          thumbColor={'#f4f3f4'}
          onValueChange={() => onToggle(id)}
          value={toggle}
        />
      </View>
    </Pressable>
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
