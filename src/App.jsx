import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/login";
import Cadastro from "./Pages/Cadastro/cadastro";
import Dashboard from "./Pages/dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";  // Importando o ProtectedRoute
import RegisterTable from "./UI/RegisterTable";
import RegisterStockTable from "./UI/RegisterStockTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Se o usuário não tiver credenciais, será redirecionado para a página de Cadastro */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />

        {/* Outras rotas */}
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/RegisterTable" element={<RegisterTable />} />
        <Route path="/RegisterStockTable" element={<RegisterStockTable />} />

        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
