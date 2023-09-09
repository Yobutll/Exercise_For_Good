import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthcontext";

function ProtectedRoute({ children }) {

    const { user } = useUserAuth();

    if (!user) {
        return <Navigate to="/login"  />;
    }
  return children;
}

export default ProtectedRoute;