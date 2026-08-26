import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CienciaInnovacion from "./pages/CienciaInnovacion";
import GestionTecnologia from "./pages/GestionTecnologia";
import MisionVision from "./pages/MisionVision";
import Organizacion from "./pages/Organizacion";
import DescripcionPosiciones from "./pages/DescripcionPosiciones";

function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-content">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mision-y-vision" element={<MisionVision />} />
            <Route path="/ciencia-e-innovacion" element={<CienciaInnovacion />} />
            <Route path="/gestion-de-tecnologia" element={<GestionTecnologia />} />
            <Route path="/organizacion" element={<Organizacion />} />
            <Route path="/descripcion-de-posiciones" element={<DescripcionPosiciones />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
