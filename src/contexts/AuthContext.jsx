import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem("usuario");

    return usuarioSalvo
      ? JSON.parse(usuarioSalvo)
      : null;
  });

  function login(nome) {
    setUsuario({ nome });
  }

  function logout() {
    setUsuario(null);
  }

  useEffect(() => {
    localStorage.setItem(
      "usuario",
      JSON.stringify(usuario)
    );
  }, [usuario]);

  return (
    <AuthContext.Provider
      value={{
        usuario,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}