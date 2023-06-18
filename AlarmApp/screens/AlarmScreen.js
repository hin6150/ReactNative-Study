import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import AlarmList from '../component/AlarmListComponent/AlarmList';
import {useNavigation} from '@react-navigation/native';
import AlarmContext from '../contexts/AlarmContext';
import {AlarmAddTab, AlarmTitle, Empty} from '../component/AlarmScreen';

const AlarmScreen = () => {
  const {alarms, onToggle, onRemove} = useContext(AlarmContext);

  const navigator = useNavigation();

  return (
    <SafeAreaView style={{backgroundColor: '#e0e0e0', flex: 1}}>
      <AlarmTitle />
      <AlarmAddTab navigator={navigator} />

      {alarms.length > 0 ? (
        <AlarmList alarms={alarms} onToggle={onToggle} onRemove={onRemove} />
      ) : (
        <Empty />
      )}
    </SafeAreaView>
  );
};

export default AlarmScreen;
