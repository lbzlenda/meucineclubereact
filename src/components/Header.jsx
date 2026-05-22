import { Link } from "react-router-dom";

import { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

import { AuthContext } from "../contexts/AuthContext";

export default function Header() {
  const { tema, alternarTema } =
    useContext(ThemeContext);

  const { usuario, logout } =
    useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home</Link> |{" "}

      <Link to="/login">Login</Link> |{" "}

      <Link to="/favoritos">
        Favoritos
      </Link>

      <button onClick={alternarTema}>
        Tema: {tema}
      </button>

      {usuario && (
        <>
          <span>
            {" "}
            | Usuário: {usuario.nome}
          </span>

          <button onClick={logout}>
            Sair
          </button>
        </>
      )}
    </nav>
  );
}