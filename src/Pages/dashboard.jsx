import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Busca o usuário logado no localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem("usuario"));

    if (usuarioLogado) {
      setUsuario(usuarioLogado);
    } else {
      // Se não houver usuário, redireciona para a página de login
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("usuario"); // Remove usuário do localStorage
    navigate("/"); // Redireciona para a tela de login
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-gray-800">Bem-vindo ao Dashboard</h1>
        {usuario && <p className="mt-2 text-gray-600">Olá, {usuario.nome}!</p>}

        <button
          onClick={handleLogout}
          className="mt-5 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

