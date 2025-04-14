import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  ChevronLeft,
} from "lucide-react";

function Dashboard() {
  const [usuario, setUsuario] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuario"));
    if (usuarioLogado) {
      setUsuario(usuarioLogado);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto] grid-cols-[auto_1fr] bg-gray-100">
      {/* Header */}
      <header className="row-span-1 col-span-2 bg-white px-6 py-4 shadow-md flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button onClick={toggleSidebar}>
            {sidebarOpen ? <ChevronLeft /> : <Menu />}
          </button>
  
          {/* Logo fictício + nome */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              D
            </div>
            <span className="text-lg font-semibold text-gray-800">M&S</span>
          </div>

          {/* <div className="flex items-center space-x-2 ml-6">
            <User className="text-gray-600" size={20} />
            {usuario && (
              <span className="text-gray-700 text-sm font-medium">
                {usuario.nome}
              </span>
            )}
          </div> */}
{/*   
          <h1 className="text-xl font-bold text-gray-800 ml-4">Dashboard</h1> */}
        </div>
  
        <button
          onClick={handleLogout}
          className="flex items-center space-x-1 text-red-500 hover:text-red-600"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </header>
  
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="bg-blue-600 text-white p-6 col-span-1 row-span-1">
          <nav className="space-y-4">
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <User size={20} />
              <span>Perfil</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <Settings size={20} />
              <span>Configurações</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <HelpCircle size={20} />
              <span>Ajuda</span>
            </a>
          </nav>
        </aside>
      )}
  
      {/* Main content */}
      <main className="p-6 col-span-1 row-span-1 overflow-y-auto">
        <div className="bg-white p-6 rounded-lg shadow-md w-full h-full">
          <h2 className="text-2xl font-bold text-gray-800">Bem-vindo ao Dashboard</h2>
          {usuario && <p className="mt-2 text-gray-600">Olá, {usuario.nome}!</p>}
        </div>
      </main>
  
      {/* Footer */}
      <footer className="col-span-2 bg-gray-800 text-white text-center py-4">
        &copy; {new Date().getFullYear()} Seu App - Todos os direitos reservados.
      </footer>
    </div>
  );
}  
export default Dashboard;
