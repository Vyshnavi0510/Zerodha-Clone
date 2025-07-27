// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import ZerodhaLogin from "./Components/ZerodhaLogin/ZerodhaLogin";
import DashBoard from "./Components/DashBoard/DashBoard";
import Orders from "./Components/Orders/Orders";
import Holdings from "./Components/Holdings/Holdings";
import Positions from "./Components/Positions/Positions";
import Bids from "./Components/Bids/Bids";
import Funds from "./Components/Funds/Funds";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccessibleTable from "./Components/AccessibleTable/AccessibleTable";
import NavBar from "./Components/NavBar/NavBar";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
// import {AuthProvider} from './Components/AuthProvider/AuthProvider';
function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      {location.pathname === "/" ? null : <NavBar />}
      {/* <AuthProvider> */}
      <Routes>
        <Route path="/" element={<ZerodhaLogin />} />
        <Route
          path="DashBoard"
          element={
            <ProtectedRoutes>
              <DashBoard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="Orders"
          element={
            <ProtectedRoutes>
              <Orders />
            </ProtectedRoutes>
          }
        />
        <Route
          path="Holdings"
          element={
            <ProtectedRoutes>
              <Holdings />
            </ProtectedRoutes>
          }
        />
        <Route
          path="Positions"
          element={
            <ProtectedRoutes>
              <Positions />
            </ProtectedRoutes>
          }
        />
        <Route
          path="Bids"
          element={
            <ProtectedRoutes>
              <Bids />
            </ProtectedRoutes>
          }
        />
        <Route
          path="Funds"
          element={
            <ProtectedRoutes>
              <Funds />
            </ProtectedRoutes>
          }
        />
      </Routes>
      {/* </AuthProvider> */}
    </>
  );
}

export default App;
