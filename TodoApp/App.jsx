import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DateHead from './components/DateHead';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppTodo from './components/AppTodo';
import Empty from './components/Empty';

const App = () => {
  const curr = new Date();

  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;

  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_today = new Date(utc + KR_TIME_DIFF);

  console.log(kr_today);
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding', andriod: undefined})}
          style={styles.avoid}>
          <DateHead date={kr_today}></DateHead>
          <Empty></Empty>
          <AppTodo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
