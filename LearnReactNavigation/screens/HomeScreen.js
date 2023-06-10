import {useEffect} from 'react';
import {Button, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({title: 'home'});
  }, [navigation]);
  return (
    <View>
      <Button
        title="Detail 1 열기"
        onPress={() => navigation.navigate('Detail', {id: 1})}></Button>
      <Button
        title="Detail 2 열기"
        onPress={() => navigation.navigate('Detail', {id: 2})}></Button>
      <Button
        title="Detail 3 열기"
        onPress={() => navigation.navigate('Detail', {id: 3})}></Button>
      <Button
        title="HeaderLess 열기"
        onPress={() => navigation.navigate('Headerless')}></Button>
    </View>
  );
};

export default HomeScreen;
