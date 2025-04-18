import { useEffect, useState } from "react";
import {
  User,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  ChevronLeft,
  Home,
  ChevronDown,
  ChevronUp,
  Box,
  Repeat,
  Banana,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import RegisterTable from "../UI/RegisterTable";
import LogoMS from "../assets/img/LogoMS.png"; 
import RegisterEstoqueTable from "../UI/RegisterStockTable";

const MovimentacaoProduto = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Entrada/Saída de Produto</h2>
    <p>Componente de movimentação de estoque (placeholder).</p>
  </div>
);

function Dashboard() {
  const [usuario, setUsuario] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [conteudo, setConteudo] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
          <div className="flex items-center space-x-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full overflow-hidden"
            >
              <img
                src={LogoMS}
                className="w-full h-full object-cover"
              />
            </a>
            <span className="text-lg font-semibold text-gray-800">M&S</span>
          </div>
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
        <aside className="bg-yellow-400 text-black p-6 col-span-1 row-span-1">
          <nav className="space-y-4">
            <button
              onClick={() => setConteudo("home")}
              className="flex items-center space-x-2 hover:underline"
            >
              <Home size={20} />
              <span>Home</span>
            </button>

            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full hover:underline"
              >
                <span className="flex items-center space-x-2">
                  <Banana size={20} />
                  <span>Registar Produtos</span>
                </span>
                {dropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {dropdownOpen && (
                <div className="ml-6 mt-2 space-y-2">
                  <button
                    onClick={() => {
                      setConteudo("produtos");
                      setDropdownOpen(false);
                    }}
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <Box size={18} />
                    <span>Registro de Produto</span>
                  </button>
                  <button
                    onClick={() => {
                      setConteudo("movimentacao");
                      setDropdownOpen(false);
                    }}
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <Repeat size={18} />
                    <span>Entrada e Saída</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setConteudo("config")}
              className="flex items-center space-x-2 hover:underline"
            >
              <Settings size={20} />
              <span>Configurações</span>
            </button>
            <button
              onClick={() => setConteudo("ajuda")}
              className="flex items-center space-x-2 hover:underline"
            >
              <HelpCircle size={20} />
              <span>Ajuda</span>
            </button>
          </nav>
        </aside>
      )}

      {/* Conteúdo Geral */}
      <main className="p-6 col-span-1 row-span-1 overflow-y-auto">
        <div className="bg-white p-6 rounded-lg shadow-md w-full h-full">
          {conteudo === "home" && (
            <h2 className="text-2xl font-bold text-gray-800">
              Bem-vindo Ao Dahboard
               </h2>
          )}
          {conteudo === "produtos" && <RegisterTable />}
          {conteudo === "movimentacao" && <RegisterEstoqueTable />}
          {conteudo === "config" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Configurações</h2>
              <p>Ajuste preferências do sistema aqui.</p>
            </div>
          )}
          {conteudo === "ajuda" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Ajuda</h2>
              <p>Suporte e documentação.</p>
            </div>
          )}
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
