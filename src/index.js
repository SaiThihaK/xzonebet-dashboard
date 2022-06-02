import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./pages/Login/Login";

import { Provider } from "react-redux";
import store from "./store";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
const loginStatus = localStorage.getItem("status");
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <Provider store={store}>
        {loginStatus === "success" ? <App /> : <Login />}
        <ReactQueryDevtools />
      </Provider>

    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
