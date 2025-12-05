import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import Home from "./components/Home";

import DashboardAuth from "./components/DashboardAuth";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={
           <DashboardAuth><Home />
           </DashboardAuth>} />
      </Routes>
    </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);
