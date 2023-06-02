import React, {useState} from 'react';
import {
  Alert,
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
import TodoList from './components/TodoList';

const App = () => {
  const curr = new Date();

  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;

  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_today = new Date(utc + KR_TIME_DIFF);

  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리엑트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ]);

  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding', andriod: undefined})}
          style={styles.avoid}>
          <DateHead date={kr_today}></DateHead>
          {todos.length === 0 ? (
            <Empty></Empty>
          ) : (
            <TodoList
              todos={todos}
              onToggle={onToggle}
              onRemove={onRemove}></TodoList>
          )}
          <AppTodo onInsert={onInsert} />
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
