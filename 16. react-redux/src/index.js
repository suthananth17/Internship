import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./App/Store";
import "./index.css";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import {Persistor} from "./App/Store"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
