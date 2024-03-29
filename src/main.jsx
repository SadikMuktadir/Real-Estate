import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Components/Routes/Routes";
import AuthProvider from "./Components/Authentication/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Routes></Routes>
    </AuthProvider>
  </React.StrictMode>
);
