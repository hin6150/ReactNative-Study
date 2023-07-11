import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from './slices';
import {configureStore} from '@reduxjs/toolkit';
import AuthApp from './components/AuthApp';
import TodoApp from './components/TodoApp';
import PostApp from './components/PostApp';

const store = configureStore({reducer: rootReducer});
const App = () => {
  return (
    <Provider store={store}>
      <PostApp />
    </Provider>
  );
};

export default App;
