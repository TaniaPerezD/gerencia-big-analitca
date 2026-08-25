import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/ciencia-e-innovacion", label: "Ciencia e Innovación" },
  { to: "/gestion-de-tecnologia", label: "Gestión de Tecnología" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            <Icon name="paw" size={22} strokeWidth={0} />
          </span>
          <span className="brand-name">
            Gato<span className="brand-accent">Byte</span>
          </span>
        </NavLink>

        <nav className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
