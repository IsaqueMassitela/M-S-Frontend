import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cadastro() {
  // Definindo o estado para os campos de entrada
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // useEffect para limpar os campos quando o componente for montado
  useEffect(() => {
    setNome(""); // Limpa o campo de nome
    setEmail(""); // Limpa o campo de email
    setSenha(""); // Limpa o campo de senha
  }, []);

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cadastro realizado:", { nome, email, senha });
    // Aqui você pode adicionar lógica para enviar os dados para um backend
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Cadastro</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          placeholder="Nome"
          type="text"
          value={nome} // Controlado por state
          onChange={(e) => setNome(e.target.value)} // Atualiza o estado
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none"
          autoComplete="off" // Desativa o autocomplete
          name="nome"
          id="nome"
        />
        <input
          placeholder="Email"
          type="email"
          value={email} // Controlado por state
          onChange={(e) => setEmail(e.target.value)} // Atualiza o estado
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none"
          autoComplete="new-email" // Definir novo autocomplete
          name="email"
          id="email"
        />
        <input
          placeholder="Senha"
          type="password"
          value={senha} // Controlado por state
          onChange={(e) => setSenha(e.target.value)} // Atualiza o estado
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none"
          autoComplete="new-password" // Usando um valor diferente para password
          name="senha"
          id="senha"
        />
        <button
          type="submit"
          className="w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:underline transition duration-300"
        >
          Cadastrar-se
        </button>
      </form>
      <Link to="/login" className="text-blue-700 hover:underline mt-4 block text-center">
        Já tem uma conta? Faça Login
      </Link>
    </div>
  );
}

export default Cadastro;