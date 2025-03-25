import {BrowserRouter, Routes, Navigate, Route} from "react-router-dom"
import Login from "./Pages/Login/login";
import Cadastro from "./Pages/Cadastro/cadastro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Cadastro" element={<Cadastro/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
