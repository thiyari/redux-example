import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
//import { compose } from 'redux';

const store = configureStore({
  reducer:  rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true, // explicitly enable (still not required)
    }),
  //enhancers: (defaultEnhancer) =>
  //compose(defaultEnhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
});

export default store;