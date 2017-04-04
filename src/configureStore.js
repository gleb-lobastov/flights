import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { airlineRoutesWidgetReducer } from './AirlineRoutesWidget/api';

const configureStore = () => {
  /* eslint-disable */
  let devTools;
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  }
  /* eslint-enable */

  const store = createStore(
    airlineRoutesWidgetReducer,
    compose(
      applyMiddleware(thunk),
      devTools || (noop => noop),
    ),
  );

  return store;
};

export default configureStore;
