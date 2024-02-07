import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { JournalApp } from "./JournalApp.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppTheme } from "./theme/AppTheme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AppTheme> */}
      <JournalApp />
      {/* </AppTheme> */}
    </BrowserRouter>
  </React.StrictMode>
);
