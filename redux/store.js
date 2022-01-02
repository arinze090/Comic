/* eslint-disable prettier/prettier */
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import booksReducer from './reducers';

// const rootReducer = combineReducers({ booksReducer });

// export const store = createStore(rootReducer, applyMiddleware(thunk));


/* eslint-disable prettier/prettier */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import booksReducer from './reducers/comicReducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bookmarks'],
};

const rootReducer = combineReducers({
  booksReducer: persistReducer(persistConfig, booksReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
