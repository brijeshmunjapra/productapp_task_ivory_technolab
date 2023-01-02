import { createStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

import createSagaMiddleware from "redux-saga";
import mySaga from "./Saga";
import { compose, applyMiddleware } from "redux";

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(mySaga);

export default store;
