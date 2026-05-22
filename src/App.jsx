import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Favoritos from "./pages/Favoritos";

import RotaProtegida from "./routes/RotaProtegida";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          element={<RotaProtegida />}
        >
          <Route
            path="/favoritos"
            element={<Favoritos />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;