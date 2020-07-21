import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StateProvider } from "./components/StateProvider";
import { initialState, reducer } from "./Reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// firebase config
/**
 * const firebaseConfig = {
  apiKey: "AIzaSyCce1RWr58-4hCSbZbn_f7t9OXS7WvzDOw",
  authDomain: "clone-f718d.firebaseapp.com",
  databaseURL: "https://clone-f718d.firebaseio.com",
  projectId: "clone-f718d",
  storageBucket: "clone-f718d.appspot.com",
  messagingSenderId: "544280043474",
  appId: "1:544280043474:web:fbc22b3e9e25e534d1720b",
  measurementId: "G-C3NB9YZD2L"
};
 */
