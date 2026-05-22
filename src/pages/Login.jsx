import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
  const [nome, setNome] = useState("");

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  function entrar(e) {
    e.preventDefault();

    login(nome);

    navigate("/");
  }

  return (
    <form onSubmit={entrar}>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) =>
          setNome(e.target.value)
        }
      />

      <button type="submit">
        Entrar
      </button>
    </form>
  );
}