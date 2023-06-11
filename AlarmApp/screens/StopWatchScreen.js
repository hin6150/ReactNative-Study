import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const StopWatchScreen = () => {
  const [min, setMin] = useState('00');
  const [sec, setSec] = useState('00');
  const [mileSec, setMileSec] = useState('00');
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', marginTop: '50%', marginBottom: 80}}>
        <Text style={{fontSize: 36}}>
          {min} : {sec} . {mileSec}
        </Text>
      </View>
      <Button title="시작"></Button>
    </SafeAreaView>
  );
};

export default StopWatchScreen;
