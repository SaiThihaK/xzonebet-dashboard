import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./pages/Login/Login";

import { Provider } from "react-redux";
import store from "./store";

const loginStatus = localStorage.getItem('status');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {
        loginStatus === 'success'? <App /> : <Login />
      }
       
       
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
