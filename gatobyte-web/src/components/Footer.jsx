import Icon from "./Icon";
import PawTrail from "./decor/PawTrail";

export default function Footer() {
  return (
    <footer className="footer">
      <PawTrail count={5} className="footer-paw-trail" />
      <div className="footer-inner">
        <div className="footer-brand">
          <Icon name="paw" size={20} strokeWidth={0} /> GatoByte
        </div>
        <p className="footer-text">
          Área de Big Data y Analítica — Ciencia, Tecnología, Innovación y Gestión de Tecnología.
        </p>
        <p className="footer-copy">© {new Date().getFullYear()} GatoByte. Todos los derechos reservados.</p>
        <a
          href="https://iatech-co-frontend.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="footer-inventory-btn"
        >
          <Icon name="database" size={16} strokeWidth={2} /> Sistema de Inventario
          <Icon name="external" size={14} strokeWidth={2} />
        </a>
      </div>
    </footer>
  );
}
