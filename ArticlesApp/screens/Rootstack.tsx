import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import ArticleScreen from './ArticleScreen';
import MyArticlesScreen from './MyArticleScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import useAuthLoadEffect from '../hooks/useAuthLoadEffect';
import WriteScreen from './WriteScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  useAuthLoadEffect();
  return (
    <Stack.Navigator screenOptions={{headerBackTitle: '닫기'}}>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: '회원가입'}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: '로그인'}}
      />
      <Stack.Screen
        name="MyArticles"
        component={MyArticlesScreen}
        options={{title: '내가 쓴 글'}}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{title: '게시글'}}
      />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{title: '새 게시글 작성'}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
