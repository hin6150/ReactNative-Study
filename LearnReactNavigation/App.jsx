// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import React from 'react';
// import HomeScreen from './screens/HomeScreen';
// import {Text, TouchableOpacity, View} from 'react-native';
// import DetailScreen from './screens/DetailScreen';
// import HeaderlessScreen from './screens/HeaderLessScreen';

// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: '홈',
//             headerStyle: {backgroundColor: '#29b6f6'},
//             headerBackTitleStyle: {fontSize: 20},
//             headerTintColor: '#fff',
//           }}
//         />
//         <Stack.Screen
//           name="Detail"
//           component={DetailScreen}
//           options={({route}) => ({
//             title: `상세정보 - ${route.params.id}`,
//             headerLeft: ({onPress}) => (
//               <TouchableOpacity onPress={onPress}>
//                 <Text>Left</Text>
//               </TouchableOpacity>
//             ),
//             headerTitle: ({children}) => (
//               <View>
//                 <Text>{children}</Text>
//               </View>
//             ),
//             headerRight: () => (
//               <View>
//                 <Text>right</Text>
//               </View>
//             ),
//             headerBackVisible: false,
//           })}
//         />
//         <Stack.Screen
//           name="Headerless"
//           component={HeaderlessScreen}
//           options={{
//             headerShown: false,
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import 'react-native-gesture-handler';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {View, Text, Button} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

// const Drawer = createDrawerNavigator();

// function HomeScreen({navigation}) {
//   return (
//     <View>
//       <Text>Home</Text>
//       <Button
//         title="Drawer 열기"
//         onPress={() => {
//           navigation.openDrawer();
//         }}
//       />
//       <Button
//         title="Setting 열기"
//         onPress={() => navigation.navigate('Setting')}
//       />
//     </View>
//   );
// }

// function SettingScreen({navigation}) {
//   return (
//     <View>
//       <Text>Setting</Text>
//       <Button title="뒤로가기" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="Home"
//         backBehavior="history"
//         drawerContent={({navigation}) => (
//           <SafeAreaView>
//             <Text>A Custom Drawer</Text>
//             <Button
//               onPress={() => navigation.closeDrawer()}
//               title="Drawer 닫기"
//             />
//           </SafeAreaView>
//         )}
//         screenOptions={{
//           drawerActiveBackgroundColor: '#fb8c00',
//           drawerActiveTintColor: 'white',
//           headerShown: false,
//         }}>
//         <Drawer.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: '홈', headerLeft: () => <Text>Left</Text>}}
//         />
//         <Drawer.Screen name="Setting" component={SettingScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Text, View} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const Tab = createBottomTabNavigator();

// function HomeScreen() {
//   return <Text>Home</Text>;
// }

// function SearchScreen() {
//   return <Text>Search</Text>;
// }

// function NotificationScreen() {
//   return <Text>Notification</Text>;
// }

// function MessageScreen() {
//   return <Text>Message</Text>;
// }
// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           tabBarActiveTintColor: '#bf8c00',
//           tabBarShowLabel: false,
//         }}>
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: '홈',
//             tabBarIcon: ({color, size}) => (
//               <Icon name="home" color={color} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Search"
//           component={SearchScreen}
//           options={{
//             title: '검색',
//             tabBarIcon: ({color, size}) => (
//               <Icon name="search" color={color} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Notification"
//           component={NotificationScreen}
//           options={{
//             title: '알림',
//             tabBarIcon: ({color, size}) => (
//               <Icon name="notifications" color={color} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Message"
//           component={MessageScreen}
//           options={{
//             title: '메시지',
//             tabBarIcon: ({color, size}) => (
//               <Icon name="message" color={color} size={size} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
import React from 'react';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  const nameMap = {
    Home: '홈',
    Search: '검색',
    Notification: '알림',
    Message: '메시지',
  };

  return nameMap[routeName];
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={({route}) => ({
            title: getHeaderTitle(route),
          })}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
