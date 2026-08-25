const PALETTES = {
  dark: { pad: "#2b2620", bean: "#f6ede1" },
  terracotta: { pad: "#c9723f", bean: "#3a2b1f" },
  tan: { pad: "#d9b98a", bean: "#8a5a34" },
};

export default function BigPaw({ color = "dark", className = "" }) {
  const p = PALETTES[color] || PALETTES.dark;
  return (
    <svg
      viewBox="0 0 200 240"
      className={`big-paw ${className}`}
      aria-hidden="true"
    >
      <ellipse cx="100" cy="165" rx="82" ry="70" fill={p.pad} />
      <ellipse cx="30" cy="95" rx="30" ry="38" fill={p.pad} />
      <ellipse cx="80" cy="45" rx="27" ry="35" fill={p.pad} />
      <ellipse cx="140" cy="45" rx="27" ry="35" fill={p.pad} />
      <ellipse cx="180" cy="100" rx="28" ry="36" fill={p.pad} />
      <ellipse cx="100" cy="175" rx="34" ry="28" fill={p.bean} opacity="0.55" />
    </svg>
  );
}
