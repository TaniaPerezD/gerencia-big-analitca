import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CienciaInnovacion from "./pages/CienciaInnovacion";
import GestionTecnologia from "./pages/GestionTecnologia";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ciencia-e-innovacion" element={<CienciaInnovacion />} />
          <Route path="/gestion-de-tecnologia" element={<GestionTecnologia />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
