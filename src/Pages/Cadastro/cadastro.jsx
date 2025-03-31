import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  useEffect(() => {
    setNome(""); 
    setEmail(""); 
    setSenha("");
  }, []);

  // Função de validação de e-mail corrigida
  const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Validação robusta
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let temErro = false;

    console.log(nome + ' submitted' + email + ' to' + senha);
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
    if (!senha.trim()) {
      setErroSenha("O campo senha é obrigatório.");
      temErro = true;
    } else if (senha.length > 6) {
      setErroSenha("A senha deve ter no máximo 6 caracteres.");
      temErro = true;
    } else {
      setErroSenha("");
    }

    if (temErro) return;

    //fetch api using axios to put data
    axios.put('http://localhost:3000/usuarios', { nome, email, senha })
     .then(response => {
        console.log(response);
        alert("success");
      })
     .catch(error => {
        console.error(nome, error, senha);
        alert("error");
      });

    //axios.get data
    // axios.get('http://localhost:3000/usuarios')
    //  .then(response => {
    //     console.log(response.data);
    //   })
    //  .catch(error => {
    //     console.error(error);
    //   });
    // Simulando o cadastro usando setTimeout para demonstrar o loading
    setTimeout(() => {
      if (temErro) return;

      console.log("Cadastro realizado:", { nome, email, senha });
    }, 2000); // Simulando um delay de 2 segundos

    console.log("Cadastro realizado:", { nome, email, senha });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Cadastro</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          placeholder="Nome"
          type="text"
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none"
          autoComplete="off" 
        />
        
        <input
  placeholder="Email *"
  type="text"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className={`w-full px-3 py-2 border ${
    erroEmail ? "border-red-500" : "border-gray-200"
  } rounded-md focus:outline-none`}
  autoComplete="off" // Desativa sugestões do navegador
  spellCheck="false" // Evita correção automática
  inputMode="email" // Indica que o campo é um email
/>

        {erroEmail && <p className="text-red-500 text-sm">{erroEmail}</p>}

        <input
  placeholder="Senha * (Máx. 6 caracteres)"
  type="password"
  value={senha}
  onChange={(e) => setSenha(e.target.value)}
  className={`w-full px-3 py-2 border ${
    erroSenha ? "border-red-500" : "border-gray-200"
  } rounded-md focus:outline-none`}
  autoComplete="new-password" // Desativa sugestões do navegador
  spellCheck="false" // Evita correção automática
/>

        {erroSenha && <p className="text-red-500 text-sm">{erroSenha}</p>}

        <button
          type="submit"
          className="w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:underline transition duration-300"
        >
          Cadastrar-se
        </button>
      </form>
      
      <Link to="/" className="text-blue-700 hover:underline mt-4 block text-center">
        Cadastre-se para fazer Login
      </Link>
    </div>
  );
}

export default Cadastro;
