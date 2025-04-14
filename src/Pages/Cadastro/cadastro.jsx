import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let temErro = false;

    if (!email.trim()) {
      setErroEmail("O campo email é obrigatório.");
      temErro = true;
    } else if (!validarEmail(email)) {
      setErroEmail("Digite um email válido (ex: usuario@dominio.com).");
      temErro = true;
    } else {
      setErroEmail("");
    }

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

    try {
      await axios.post("http://localhost:3000/usuarios", {
        nome,
        email,
        senha,
      });

      setMensagem("Usuário cadastrado com sucesso! Redirecionando...");
      
      setTimeout(() => {
        navigate("/"); // Redireciona para login após 2 segundos
      }, 2000);

    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setMensagem("Erro ao cadastrar usuário. Verifique os dados e tente novamente.");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-200">
      <div className="max-w-md mx-auto mt-5 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Cadastro</h2>

        <form className="flex flex-col gap-4" autoComplete="off" onSubmit={handleSubmit}>
          <input
            placeholder="Nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-md"
            autoComplete="off"
          />

          <input
            placeholder="Digite Email*"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 border ${erroEmail ? "border-red-500" : "border-gray-200"} rounded-md`}
            autoComplete="off"
            inputMode="email"
          />
          {erroEmail && <p className="text-red-500 text-sm">{erroEmail}</p>}

          <input
            placeholder="Digite a Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={`w-full px-3 py-2 border ${erroSenha ? "border-red-500" : "border-gray-200"} rounded-md`}
            autoComplete="new-password"
          />
          {erroSenha && <p className="text-red-500 text-sm">{erroSenha}</p>}

          {mensagem && <p className="text-green-600 text-center">{mensagem}</p>}

          <button
            type="submit"
            className="w-full font-bold bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Cadastrar-se
          </button>
        </form>

        <Link to="/" className="text-blue-700 font-bold hover:underline mt-4 block text-center">
          Já tem uma conta? Faça login
        </Link>
      </div>
    </div>
  );
}

export default Cadastro;








// import axios from "axios";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// function Cadastro() {
//   // Estado para armazenar os valores dos campos
//   const [nome, setNome] = useState("");
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");
  
//   // Estados para exibir mensagens de erro
//   const [erroEmail, setErroEmail] = useState("");
//   const [erroSenha, setErroSenha] = useState("");
//   const [message, setMessage] = useState("");

//   // Função de validação de e-mail
//   const validarEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   // Função de envio de formulário
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let temErro = false;

//     // Validação do e-mail
//     if (!email.trim()) {
//       setErroEmail("O campo email é obrigatório.");
//       temErro = true;
//     } else if (!validarEmail(email)) {
//       setErroEmail("Digite um email válido (ex: usuario@dominio.com).");
//       temErro = true;
//     } else {
//       setErroEmail("");
//     }

//     // Validação da senha
//     if (!senha.trim()) {
//       setErroSenha("O campo senha é obrigatório.");
//       temErro = true;
//     } else if (senha.length > 6) {
//       setErroSenha("A senha deve ter no máximo 6 caracteres.");
//       temErro = true;
//     } else {
//       setErroSenha("");
//     }

//     // Se houver erros, não envia o formulário
//     if (temErro) return;

//     // Envia os dados para o backend
//     try {
//       const response = await axios.post('http://localhost:3000/usuarios', { nome, email, senha });
//       setMessage("Usuário cadastrado com sucesso!");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Erro ao cadastrar:", error);
//       setMessage("Erro ao cadastrar usuário. Verifique os dados e tente novamente.");
//     }

//     // Tenta buscar a lista de usuários cadastrados
//     try {
//       const response = await axios.get('http://localhost:3000/usuarios');
//       console.log("Usuários cadastrados:", response.data);
//     } catch (error) {
//       console.error("Erro ao buscar usuários:", error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Cadastro</h2>
      
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           placeholder="Nome"
//           type="text"
//           value={nome}
//           onChange={(e) => setNome(e.target.value)} 
//           className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none"
//           autoComplete="off"
//         />
        
//         <input
//           placeholder="Email *"
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className={`w-full px-3 py-2 border ${erroEmail ? "border-red-500" : "border-gray-200"} rounded-md focus:outline-none`}
//           autoComplete="off"
//           spellCheck="false"
//           inputMode="email"
//         />
//         {erroEmail && <p className="text-red-500 text-sm">{erroEmail}</p>}

//         <input
//           placeholder="Senha * (Máx. 6 caracteres)"
//           type="password"
//           value={senha}
//           onChange={(e) => setSenha(e.target.value)}
//           className={`w-full px-3 py-2 border ${erroSenha ? "border-red-500" : "border-gray-200"} rounded-md focus:outline-none`}
//           autoComplete="new-password"
//           spellCheck="false"
//         />
//         {erroSenha && <p className="text-red-500 text-sm">{erroSenha}</p>}

//         <button
//           type="submit"
//           className="w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:underline transition duration-300"
//         >
//           Cadastrar-se
//         </button>
//       </form>
      
//       {message && <p className="mt-4 text-center text-green-600">{message}</p>}

//       <Link to="/" className="text-blue-700 hover:underline mt-4 block text-center">
//         Já tem uma conta? Faça login
//       </Link>
//     </div>
//   );
// }

// export default Cadastro;
