import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";

function App({ authService }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className={styles.app}>
              <Login authService={authService} />
            </div>
          }
        ></Route>
        <Route path="/maker" element={<Maker authService={authService} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
