import { all } from "redux-saga/effects";
import { watcherSaga } from "../sagas/sagas";
// Ajusta la ruta si es necesario

export function* rootSaga() {
  yield all([
    watcherSaga(), // Aquí puedes agregar más sagas si es necesario
  ]);
}
