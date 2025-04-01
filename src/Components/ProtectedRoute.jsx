import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const usuario = localStorage.getItem("usuario"); // Verifica se há usuário logado

  return usuario ? <Navigate to="/Dashboard" replace /> : children;
}

export default ProtectedRoute;
