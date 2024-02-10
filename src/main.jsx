import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { JournalApp } from "./JournalApp.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppTheme } from "./theme/AppTheme.jsx";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <AppTheme> */}
        <JournalApp />
        {/* </AppTheme> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
