import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";
import { navLinks } from "../data/navigation";

const normalize = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export default function CommandSearch({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return navLinks;
    return navLinks.filter((l) => normalize(`${l.label} ${l.group}`).includes(q));
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setIndex(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  function go(link) {
    if (!link) return;
    navigate(link.to);
    onClose();
  }

  function onKeyDown(e) {
    if (e.key === "Escape") onClose();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") go(results[index]);
  }

  if (!open) return null;

  return (
    <div className="cmd-backdrop" onMouseDown={onClose} role="presentation">
      <div
        className="cmd-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Buscar página"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          className="cmd-input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIndex(0);
          }}
          onKeyDown={onKeyDown}
          placeholder="Buscar una página…"
          aria-label="Buscar una página"
        />
        <ul className="cmd-list">
          {results.map((l, i) => (
            <li key={l.to}>
              <button
                type="button"
                className={`cmd-item${i === index ? " cmd-item-active" : ""}`}
                onClick={() => go(l)}
                onMouseEnter={() => setIndex(i)}
              >
                <Icon name={l.icon} size={17} strokeWidth={2} />
                {l.label}
                <small>{l.group}</small>
              </button>
            </li>
          ))}
          {results.length === 0 && <li className="cmd-empty">No hay páginas que coincidan.</li>}
        </ul>
      </div>
    </div>
  );
}
