import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from './slices';
import {configureStore} from '@reduxjs/toolkit';
import AuthApp from './components/AuthApp';

const store = configureStore({reducer: rootReducer});
const App = () => {
  return (
    <Provider store={store}>
      <AuthApp />
    </Provider>
  );
};

export default App;
