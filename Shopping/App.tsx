import React from 'react';
import RootStack from './screens/RootStack';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {Provider} from 'react-redux';
import rootReducer from './slices';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({reducer: rootReducer});
const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
      <Toast />
    </Provider>
  );
};

export default App;
