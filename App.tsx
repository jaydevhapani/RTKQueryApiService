import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {persistStore} from 'redux-persist';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Demo from './Demo';
import {store} from './reduxConfig/store';

let persister = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <Demo />
      </PersistGate>
    </Provider>
  );
};

export default App;
