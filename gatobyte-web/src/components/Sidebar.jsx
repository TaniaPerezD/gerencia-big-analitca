import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";

const links = [
  { to: "/", label: "Inicio", icon: "home" },
  { to: "/ciencia-e-innovacion", label: "Ciencia e Innovación", icon: "microscope" },
  { to: "/gestion-de-tecnologia", label: "Gestión de Tecnología", icon: "compass" },
  { to: "/mision-y-vision", label: "Misión y Visión", icon: "target" },
  { to: "/organizacion", label: "Organización", icon: "network" },
  { to: "/descripcion-de-posiciones", label: "Descripción de Posiciones", icon: "file" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="mobile-topbar">
        <NavLink to="/" className="brand">
          <span className="brand-mark">
            <Icon name="paw" size={20} strokeWidth={0} />
          </span>
          <span className="brand-name">
            Gato<span className="brand-accent">Byte</span>
          </span>
        </NavLink>
        <button
          type="button"
          className="sidebar-toggle"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
        >
          <Icon name="menu" size={22} strokeWidth={2} />
        </button>
      </div>

      {open && <div className="sidebar-backdrop" onClick={() => setOpen(false)} />}

      {collapsed && (
        <button
          type="button"
          className="sidebar-expand-btn"
          onClick={() => setCollapsed(false)}
          aria-label="Mostrar menú"
        >
          <Icon name="chevronRight" size={18} strokeWidth={2.2} />
        </button>
      )}

      <aside className={`sidebar${open ? " sidebar-open" : ""}${collapsed ? " sidebar-collapsed" : ""}`}>
        <button
          type="button"
          className="sidebar-collapse-btn"
          onClick={() => setCollapsed(true)}
          aria-label="Ocultar menú"
        >
          <Icon name="chevronLeft" size={16} strokeWidth={2.2} />
        </button>

        <div className="sidebar-head">
          <NavLink to="/" className="brand">
            <span className="brand-mark">
              <Icon name="paw" size={22} strokeWidth={0} />
            </span>
            <span className="brand-name">
              Gato<span className="brand-accent">Byte</span>
            </span>
          </NavLink>
          <button
            type="button"
            className="sidebar-close"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
          >
            <Icon name="close" size={20} strokeWidth={2} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}
            >
              <Icon name={link.icon} size={18} strokeWidth={2} />
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-foot">
          <Icon name="paw" size={16} strokeWidth={0} />
          <p>Área de Big Data y Analítica — servicios médicos basados en datos.</p>
        </div>
      </aside>
    </>
  );
}
