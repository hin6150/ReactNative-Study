import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {weekString} from '../../storages/formatData';

export const DateBox = ({weekCheck, date, setVisible, week}) => (
  <View style={styles.dataBox}>
    <Text style={{fontSize: 20}}>
      {weekCheck
        ? '매주 ' + week.map((item, idx) => (item ? weekString[idx] : null))
        : `${date.getMonth() + 1}월 ${date.getDate()}일`}
    </Text>
    <Pressable
      android_ripple={{color: '#ededed'}}
      onPress={() => setVisible(true)}>
      <Icon name="calendar-today" color={'black'} size={20} />
    </Pressable>
  </View>
);
export const WeekBox = ({week, weekHandle}) => (
  <View
    style={{
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    }}>
    {week.map((data, key) => {
      return (
        <View
          key={key}
          style={{
            borderRadius: 24,
            overflow: 'hidden',
          }}>
          <Pressable
            android_ripple={{color: '#ededed'}}
            onPress={() => weekHandle(key)}>
            <View
              style={[
                styles.weekBox,
                {
                  borderWidth: data ? 1 : 0,
                },
              ]}>
              <Text
                style={{
                  color: data ? 'blue' : 'black',
                }}>
                {weekString[key]}
              </Text>
            </View>
          </Pressable>
        </View>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  timeBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '20%',
    marginBottom: '10%',
  },
  dataBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  weekBox: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 24,
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
});
