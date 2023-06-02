import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todos, onToggle, onRemove}) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <TodoItem item={item} onToggle={onToggle} onRemove={onRemove} />
      )}
      keyExtractor={item => item.id.toString()}></FlatList>
  );
};

const styles = StyleSheet.create({
  list: {flex: 1},
  separator: {backgroundColor: '#e0e0e0', height: 1.5},
});

export default TodoList;
