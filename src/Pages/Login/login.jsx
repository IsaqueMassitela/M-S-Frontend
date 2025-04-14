import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Para fazer a requisição POST

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  
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

    const response = await axios.get("http://localhost:3000/usuarios", {
      params: {
        email,
        senha: password,
      },
    });
    
    const usuarios = response.data;
    
    if (usuarios.length > 0) {
      localStorage.setItem("usuario", JSON.stringify(usuarios[0]));
      navigate("/Dashboard");
    } else {
      setMensagemErro("Email ou senha incorretos.");
    }
    
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-200">
      <div className="max-w-md mx-auto mt-5 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Login</h2>

        <form className="flex flex-col gap-4" autoComplete="off" onSubmit={handleSubmit}>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-3 py-2 border ${erroSenha ? "border-red-500" : "border-gray-200"} rounded-md`}
            autoComplete="new-password"
          />
          {erroSenha && <p className="text-red-500 text-sm">{erroSenha}</p>}

          {mensagemErro && <p className="text-red-500 text-center">{mensagemErro}</p>}

          <button
            type="submit"
            className="w-full font-bold bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Entrar
          </button>
        </form>

        <Link to="/Cadastro" className="text-blue-700 font-bold hover:underline mt-4 block text-center">
          Ainda não tem uma conta? Faça o Cadastro
        </Link>
      </div>
    </div>
  );
}

export default Login;








// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios"; // Para buscar os dados do backend

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [erroEmail, setErroEmail] = useState("");
//   const [erroSenha, setErroSenha] = useState("");
//   const [mensagemErro, setMensagemErro] = useState("");
  
//   const navigate = useNavigate(); // Hook para redirecionamento

//   const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let temErro = false;

//     if (!email.trim()) {
//       setErroEmail("O campo email é obrigatório.");
//       temErro = true;
//     } else if (!validarEmail(email)) {
//       setErroEmail("Digite um email válido (ex: usuario@dominio.com).");
//       temErro = true;
//     } else {
//       setErroEmail("");
//     }

//     if (!password.trim()) {
//       setErroSenha("O campo senha é obrigatório.");
//       temErro = true;
//     } else if (password.length > 6) {
//       setErroSenha("A senha deve ter no máximo 6 caracteres.");
//       temErro = true;
//     } else {
//       setErroSenha("");
//     }

//     if (temErro) return;

//     try {
//       // Faz a requisição para buscar usuários cadastrados
//       const response = await axios.get("http://localhost:3000/usuarios");
//       const usuarios = response.data;

//       // Verifica se o email e senha correspondem a um usuário cadastrado
//       const usuarioEncontrado = usuarios.find(
//         (user) => user.email === email && user.senha === password
//       );

//       if (usuarioEncontrado) {
//         console.log("Login bem-sucedido!", usuarioEncontrado);
        
//         // Salvar informações do usuário (opcional, usar localStorage)
//         localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));

//         // Redirecionar para o Dashboard
//         navigate("/Dashboard");
//       } else {
//         setMensagemErro("Email ou senha incorretos.");
//       }
//     } catch (error) {
//       console.error("Erro ao buscar usuários:", error);
//       setMensagemErro("Erro ao acessar o sistema. Tente novamente.");
//     }
//   };

//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-blue-200">
//       <div className="max-w-md mx-auto mt-5 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Login</h2>

//         <form className="flex flex-col gap-4" autoComplete="off" onSubmit={handleSubmit}>
//           <input
//             placeholder="Digite Email*"
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className={`w-full px-3 py-2 border ${erroEmail ? "border-red-500" : "border-gray-200"} rounded-md`}
//             autoComplete="off"
//             inputMode="email"
//           />
//           {erroEmail && <p className="text-red-500 text-sm">{erroEmail}</p>}

//           <input
//             placeholder="Digite a Senha"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className={`w-full px-3 py-2 border ${erroSenha ? "border-red-500" : "border-gray-200"} rounded-md`}
//             autoComplete="new-password"
//           />
//           {erroSenha && <p className="text-red-500 text-sm">{erroSenha}</p>}

//           {mensagemErro && <p className="text-red-500 text-center">{mensagemErro}</p>}

//           <button
//             type="submit"
//             className="w-full font-bold bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
//           >
//             Entrar
//           </button>
//         </form>

//         <Link to="/Cadastro" className="text-blue-700 font-bold hover:underline mt-4 block text-center">
//           Ainda não tem uma conta? Faça o Cadastro
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Login;
