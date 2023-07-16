import React from 'react';
import {Text, View, Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from './RootStack';

const HomeScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Admin"
        onPress={() => navigation.navigate('Admin')}
      />
    </View>
  );
};

export default HomeScreen;
