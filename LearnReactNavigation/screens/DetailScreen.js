import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View>
      <Text>Detail Page {route.params.id}</Text>
      <Button
        title="다음"
        onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
      />
      <Button title="뒤로가기" onPress={() => navigation.pop()}></Button>
      <Button title="처음으로" onPress={() => navigation.popToTop()}></Button>
    </View>
  );
};

export default DetailScreen;
