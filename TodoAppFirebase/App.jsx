import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import DateHead from './components/DateHead';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppTodo from './components/AppTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
import {createPost, getPosts, removePost, updatePost} from './lib/posts';

const App = () => {
  const curr = new Date();

  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;

  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_today = new Date(utc + KR_TIME_DIFF);

  const [todos, setTodos] = useState([]);

  const onInsert = text => {
    createPost({text, done: false});
    getPosts().then(setTodos);
  };

  const onToggle = id => {
    const filteredTodos = todos.filter(todo => todo.id === id);
    updatePost({id, done: !filteredTodos[0].done});
    getPosts().then(setTodos);
  };

  const onRemove = id => {
    removePost(id);
    getPosts().then(setTodos);
  };

  useEffect(() => {
    getPosts().then(setTodos);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding', andriod: undefined})}
          style={styles.avoid}>
          <DateHead date={kr_today} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
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
