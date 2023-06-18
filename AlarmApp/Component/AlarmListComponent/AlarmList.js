import React from 'react';
import AlarmItem from './AlarmItem';
import {SwipeListView} from 'react-native-swipe-list-view';
import {HiddenItem} from '.';

const AlarmList = ({alarms, onToggle, onRemove}) => {
  return (
    <SwipeListView
      disableRightSwipe
      data={alarms}
      renderItem={({item}) => <AlarmItem item={item} onToggle={onToggle} />}
      renderHiddenItem={({item}) => (
        <HiddenItem item={item} onRemove={onRemove} />
      )}
      rightOpenValue={-70}
      previewOpenDelay={3000}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default AlarmList;
