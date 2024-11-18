import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../reducers/rootReducer";
import { rootSaga } from "../sagas/rootSaga";
// Ajusta la ruta según tu estructura

const sagaMiddleware = createSagaMiddleware();

export const createNewAppAsyncStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== "production",
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
