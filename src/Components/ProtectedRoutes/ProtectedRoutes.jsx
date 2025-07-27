import React from "react";
import DashBoard from "../DashBoard/DashBoard";
import ZerodhaLogin from "../ZerodhaLogin/ZerodhaLogin";
import { Navigate } from "react-router-dom";
export default function ProtectedRoutes({ children }) {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
        return <Navigate to="/" />
    }
    return children
}