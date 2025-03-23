import { useEffect, useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(""); // Limpa o campo de email ao carregar
    setPassword(""); // Limpa o campo de senha ao carregar
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Login</h2>
      <form className="flex flex-col gap-4" autoComplete="off">
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={email} // Controlado pelo state
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none"
        />
        <input
          placeholder="Senha"
          type="password"
          name="password"
          value={password} // Controlado pelo state
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none"
        />
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:underline transition">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
