import React from 'react';
import HomeScreen from './HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import AdminScreen from './AdminScreen';
import ProductSrceen from './ProductScreen';

type RootStackParamList = {
  Home: undefined;
  Admin: undefined;
  Product: undefined;
};
export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Product" component={ProductSrceen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
