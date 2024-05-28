import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import "../node_modules/bootstrap/dist/js/bootstrap";
import AuthContextProvider from "./pages/Contaxt/AuthContaxt";
// import { ReduxProvider } from "./ReduxProvider";
import { Provider } from "react-redux";
import { Store } from "./stor/stor";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
