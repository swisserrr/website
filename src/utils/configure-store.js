import { createStore, applyMiddleware, compose } from 'redux';
import isEqual from 'lodash/isEqual';
import createSagaMiddleware from 'redux-saga';

import { createWrapper } from 'next-redux-wrapper';
import { persistStore } from 'redux-persist';

import combinedReducers from './create-reducer';
import rootSaga from './create-saga';

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  let store = createStore(combinedReducers, enhancer);

  // Verify, this is client.
  if (!isEqual(typeof window, 'undefined')) {
    store.__persistStore = persistStore(store);
    sagaMiddleware.run(rootSaga);
  } else {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  }

  return store;
};

export default createWrapper(makeStore, { debug: false });
