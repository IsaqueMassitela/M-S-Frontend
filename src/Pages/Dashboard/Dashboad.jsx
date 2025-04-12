import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    console.log("Usuário deslogado.");
    navigate("/"); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Bem-vindo ao Dashboard!</h1>
        <p className="text-gray-600 mb-6">Você está logado com sucesso.</p>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
        >
          Sair
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
