import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AlarmScreen from './AlarmScreen';
import WorldTimeScreen from './WorldTimeScreen';
import StopWatchScreen from './StopWatchScreen';
import TimerScreen from './TimerScreen';

const Tab = createBottomTabNavigator();
const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveBackgroundColor: '#e0e0e0',
        tabBarInactiveBackgroundColor: '#e9e9e9',
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarIconStyle: {display: 'none'},
        tabBarLabelStyle: {
          position: 'absolute',
          top: 14,
          fontSize: 16,
        },
        headerShown: false,
      }}>
      <Tab.Screen name="알람" component={AlarmScreen} />
      <Tab.Screen name="세계시각" component={WorldTimeScreen} />
      <Tab.Screen name="스톱워치" component={StopWatchScreen} />
      <Tab.Screen name="타이머" component={TimerScreen} />
    </Tab.Navigator>
  );
};

export default MainScreen;
