import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import rootReducer from './combineReducer.tsx';
import {setupListeners} from '@reduxjs/toolkit/query';
import {apiService} from './slice/apiServiceSlice.tsx';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

//!NOTE ::  if possible then do not use persist with RTK api query

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiService.middleware), //!we have to set api service with middleware
});

setupListeners(store.dispatch);
