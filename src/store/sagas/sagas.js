import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { API_CALL_REQUEST } from "../actions/asyncActions";

// Watcher SAGA: Escucha las acciones de tipo API_CALL_REQUEST
export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

// Worker SAGA: Realiza la llamada HTTP y despacha las acciones
export function* workerSaga(action) {
  try {
    // Llamada HTTP usando `call`
    const response = yield call(fetchHttp, action.payload.request);

    // Obtener el token de la respuesta
    const token = response.data.token;

    // Despachar acción exitosa con el token
    yield put({
      type: action.payload.okAction,
      payload: { token },
    });
  } catch (error) {
    // Despachar acción de error con los detalles
    yield put({
      type: action.payload.failAction,
      payload: { error: error.message },
    });
  }
}

// Función que envuelve la llamada a Axios
function fetchHttp(request) {
  return axios(request);
}
