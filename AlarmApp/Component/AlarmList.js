import React from 'react';
import AlarmItem from './AlarmItem';
import {
  Animated,
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

const AlarmList = ({alarms, onToggle, onRemove}) => {
  return (
    <SwipeListView
      disableRightSwipe
      data={alarms}
      renderItem={({item}) => <AlarmItem item={item} onToggle={onToggle} />}
      renderHiddenItem={({item}) => (
        <TouchableNativeFeedback onPress={() => onRemove(item.id)}>
          <View style={styles.block}>
            <Text style={{color: 'white'}}>삭제</Text>
          </View>
        </TouchableNativeFeedback>
      )}
      rightOpenValue={-70}
      previewOpenDelay={3000}
      keyExtractor={item => item.id.toString()}></SwipeListView>
  );
};

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

export default AlarmList;
