import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
// import { createBrowserHistory } from 'history';
//import { routerMiddleware } from "connected-react-router";

// export const history = createBrowserHistory();

const CreateStore = (rootReducer, rootSaga) => {
  const sagaMiddleware = createSagaMiddleware();
  // const historyMiddleware = routerMiddleware(history);

  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];

  const composedEnhancers = composeWithDevTools(...enhancers);
  // const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer(), composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default CreateStore;