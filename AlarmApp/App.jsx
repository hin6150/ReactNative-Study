import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainScreen from './screens/MainScreen';
import WorldTimeScreen from './screens/WorldTimeScreen';
import StopWatchScreen from './screens/StopWatchScreen';
import TimerScreen from './screens/TimerScreen';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="알람" component={MainScreen} />
        <Tab.Screen name="세계시각" component={WorldTimeScreen} />
        <Tab.Screen name="스톱워치" component={StopWatchScreen} />
        <Tab.Screen name="타이머" component={TimerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
