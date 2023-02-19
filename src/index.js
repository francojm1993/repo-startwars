import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharaptersRoute from "./routes/CharaptersRoute";
import NavesRoute from "./routes/NavesRoute";
import PlanetsRoute from "./routes/PlanetsRoute";
import ErrorRoute from "./routes/ErrorRoute";
import LoginRoute from "./routes/LoginRoute";
import RegisterRoute from "./routes/RegisterRoute";
import UserProvider from "./context/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<App />}>
            {/** ------------RUTAS   ---------**/}
            <Route path="/charapters" element={<CharaptersRoute />} />
            <Route path="/planets" element={<PlanetsRoute />} />
            <Route path="/registro" element={<RegisterRoute />} />
            <Route path="/naves" element={<NavesRoute />} />
            <Route path="/login" element={<LoginRoute />} />
            <Route path="*" element={<ErrorRoute />} />
            {/** ----------------------------- **/}
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
