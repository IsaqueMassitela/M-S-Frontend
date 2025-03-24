import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let temErro = false;

    // Validação do email
    if (!email.trim()) {
      setErroEmail("O campo email é obrigatório.");
      temErro = true;
    } else if (!validarEmail(email)) {
      setErroEmail("Digite um email válido (ex: usuario@dominio.com).");
      temErro = true;
    } else {
      setErroEmail("");
    }

    // Validação da senha
    if (!password.trim()) {
      setErroSenha("O campo senha é obrigatório.");
      temErro = true;
    } else if (password.length > 6) {
      setErroSenha("A senha deve ter no máximo 6 caracteres.");
      temErro = true;
    } else {
      setErroSenha("");
    }

    if (temErro) return;

    console.log("Login realizado:", { email, password });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Login</h2>
      
      <form className="flex flex-col gap-4" autoComplete="off" onSubmit={handleSubmit}>
        <input
          placeholder="Email *"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full px-3 py-2 border ${
            erroEmail ? "border-red-500" : "border-gray-200"
          } rounded-md focus:outline-none`}
          autoComplete="off"
          spellCheck="false"
          inputMode="email"
        />
        {erroEmail && <p className="text-red-500 text-sm">{erroEmail}</p>}

        <input
          placeholder="Senha * (Máx. 6 caracteres)"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full px-3 py-2 border ${
            erroSenha ? "border-red-500" : "border-gray-200"
          } rounded-md focus:outline-none`}
          autoComplete="new-password"
          spellCheck="false"
        />
        {erroSenha && <p className="text-red-500 text-sm">{erroSenha}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Entrar
        </button>
      </form>
      
      <Link to="/" className="text-blue-700 hover:underline mt-4 block text-center">
        Ainda não tem uma conta? Faça o Cadastro
      </Link>
    </div>
  );
}

export default Login;
