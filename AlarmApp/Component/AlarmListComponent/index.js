import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export const HiddenItem = ({onRemove, item}) => (
  <Pressable
    onPress={() => onRemove(item.id)}
    android_ripple={{color: '#ededed'}}>
    <View style={styles.block}>
      <Text style={{color: 'white'}}>삭제</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row-reverse',
    height: 72,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'red',
    borderRadius: 15,
  },
});
