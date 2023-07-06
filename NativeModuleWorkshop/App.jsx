// import React from 'react';
// import {Button, SafeAreaView} from 'react-native';
// import ToastModule from './Toast';

// const App = () => {
//   const onPress = () => {
//     console.log('click');
//     ToastModule.show('Hello World', ToastModule.SHORT);
//   };
//   return (
//     <SafeAreaView>
//       <Button title="Press me" onPress={onPress} />
//     </SafeAreaView>
//   );
// };

// export default App;

import React, {useState} from 'react';
import {setBrightness} from './Brightness';
import {Button, SafeAreaView, Text, View} from 'react-native';

const App = () => {
  const [value, setValue] = useState(-1);
  const onPress = async () => {
    const brightness = await getBrightness();
    setValue(brightness);
  };

  const onPressLow = () => {
    setBrightness(0.25);
    setValue(0.25);
  };

  const onPressHigh = () => {
    setBrightness(1);
    setValue(1);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button title="Update Brightness" onPress={onPress} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Text style={{fontSize: 64}}>{value}</Text>
      </View>
      <Button title="Low Brightness" onPress={onPressLow} />
      <Button title="High Brightness" onPress={onPressHigh} />
    </SafeAreaView>
  );
};

export default App;
