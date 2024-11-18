import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppReduxSaga from "./AppReduxSaga";
import reportWebVitals from "./reportWebVitals";

import { createNewAppAsyncStore } from "./store/config/storeConfig"; // Asegúrate de que este sea tu store
import { Provider } from "react-redux"; // Importa el Provider desde react-redux

let appAsyncStore = createNewAppAsyncStore(); // Crea el store utilizando la función que definiste

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={appAsyncStore}>
      {/* Envuelve tu aplicación con el Provider */}
      <AppReduxSaga />
    </Provider>
  </React.StrictMode>
);

// Si quieres medir el rendimiento en tu aplicación, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o envíalo a un punto de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
