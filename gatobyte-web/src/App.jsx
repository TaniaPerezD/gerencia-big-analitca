import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CienciaInnovacion from "./pages/CienciaInnovacion";
import GestionTecnologia from "./pages/GestionTecnologia";
import MisionVision from "./pages/MisionVision";
import Organizacion from "./pages/Organizacion";
import DescripcionPosiciones from "./pages/DescripcionPosiciones";
import Mbti from "./pages/Mbti";
import Scrum from "./pages/Scrum";
import Idef0 from "./pages/Idef0";
import Bpmn from "./pages/Bpmn";
import DatosTableau from "./pages/DatosTableau";
import Monitoreo from "./pages/Monitoreo";
import Patrones from "./pages/Patrones";
import Presupuesto from "./pages/Presupuesto";
import Contactos from "./pages/Contactos";
import AnalisisServicios from "./pages/AnalisisServicios";

function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
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
            <Route path="/mbti-del-equipo" element={<Mbti />} />
            <Route path="/scrum-del-equipo" element={<Scrum />} />
            <Route path="/idef0" element={<Idef0 />} />
            <Route path="/bpmn-del-equipo" element={<Bpmn />} />
            <Route path="/datos-tableau" element={<DatosTableau />} />
            <Route path="/monitoreo-grafana" element={<Monitoreo />} />
            <Route path="/monitoreo-solarwinds" element={<Navigate to="/monitoreo-grafana" replace />} />
            <Route path="/patrones-weka" element={<Patrones />} />
            <Route path="/presupuesto" element={<Presupuesto />} />
            <Route path="/analisis-de-servicios" element={<AnalisisServicios />} />
            <Route path="/contactos" element={<Contactos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
