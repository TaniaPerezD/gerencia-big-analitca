import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";
import CommandSearch from "./CommandSearch";
import { navGroups } from "../data/navigation";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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

        <button type="button" className="sidebar-search-btn" onClick={() => setSearchOpen(true)}>
          <Icon name="zoomIn" size={16} strokeWidth={2} />
          Buscar página
          <kbd>Ctrl K</kbd>
        </button>

        <nav className="sidebar-nav">
          {navGroups.map((group) => (
            <div key={group.label || "general"}>
              {group.label && <p className="sidebar-group-label">{group.label}</p>}
              {group.links.map((link) => (
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
            </div>
          ))}
        </nav>

        <a
          href="https://iatech-co-frontend.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="sidebar-inventory-btn"
        >
          <Icon name="database" size={17} strokeWidth={2} />
          Sistema de Inventario
          <Icon name="external" size={13} strokeWidth={2} />
        </a>

        <div className="sidebar-foot">
          <Icon name="paw" size={16} strokeWidth={0} />
          <p>Área de Big Data y Analítica — servicios médicos basados en datos.</p>
        </div>
      </aside>

      <CommandSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
