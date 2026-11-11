import { useState } from "react";
import Icon from "./Icon";

export default function CopyButton({ text, label = "Copiar", doneLabel = "Copiado", className = "" }) {
  const [done, setDone] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand("copy");
      } catch {
        /* sin permiso de portapapeles */
      }
      document.body.removeChild(area);
    }
    setDone(true);
    setTimeout(() => setDone(false), 1800);
  }

  return (
    <button type="button" className={`copy-btn${done ? " copy-btn-done" : ""} ${className}`} onClick={copy}>
      <Icon name={done ? "check" : "file"} size={14} strokeWidth={2.2} />
      {done ? doneLabel : label}
    </button>
  );
}
