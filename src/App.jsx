import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/login";
import Cadastro from "./Pages/Cadastro/cadastro";
import Dashboard from "./Pages/dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        
        {/* Impede acesso direto à rota /Cadastro */}
        <Route
          path="/Cadastro"
          element={
            <ProtectedRoute>
              <Cadastro />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;