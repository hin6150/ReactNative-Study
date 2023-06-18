import React, {useState} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import TimeWheel from '../component/TimeWheel';
import {timeTo12, timeTo60_5} from '../storages/formatData';

const TimerScreen = () => {
  const [hour, setHour] = useState(5);
  const [min, setMin] = useState(5);
  const [sec, setSec] = useState(5);

  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '40%',
        }}>
        <TimeWheel
          text={'시간'}
          index={hour}
          setIndex={setHour}
          options={timeTo12}
        />
        <TimeWheel
          text={'분'}
          index={min}
          setIndex={setMin}
          options={timeTo60_5}
        />
        <TimeWheel
          text={'초'}
          index={sec}
          setIndex={setSec}
          options={timeTo60_5}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 24}}>
          {hour + 1}시 {min * 5}분 {sec * 5}초
        </Text>
      </View>
      <Button title="시작"></Button>
    </SafeAreaView>
  );
};

export default TimerScreen;
