import { useContext } from "react";

import {
  Navigate,
  Outlet,
} from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

export default function RotaProtegida() {
  const { usuario } =
    useContext(AuthContext);

  if (!usuario) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}