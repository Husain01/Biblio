import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/Auth/AuthContext";
import { QuizProvider } from "./context/QuizData/QuizDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QuizProvider>
    </BrowserRouter>
  </React.StrictMode>
);
