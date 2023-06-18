import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export const AlarmTitle = () => (
  <View style={styles.box}>
    <Text style={{fontSize: 24}}>ReactNative 알람 앱</Text>
  </View>
);

export const AlarmAddTab = ({navigator}) => (
  <View style={{flexDirection: 'row-reverse', marginLeft: 20}}>
    <Pressable
      onPress={() => {
        navigator.navigate('Add');
      }}
      android_ripple={{color: '#ededed'}}>
      <View
        style={{
          width: 48,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 48}}>+</Text>
      </View>
    </Pressable>
  </View>
);

export const Empty = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text
      style={{
        fontSize: 32,
      }}>
      알람을 등록해주세요!
    </Text>
  </View>
);

const styles = StyleSheet.create({
  box: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
