export default function CatSilhouette({ pose = "loaf", color = "#2b2620", className = "" }) {
  if (pose === "stretch") {
    return (
      <svg viewBox="0 0 260 140" className={`cat-silhouette ${className}`} aria-hidden="true">
        <path
          d="M15 118 C15 100 30 92 45 92 C50 78 62 60 82 52 C78 62 78 72 82 80
             C100 62 128 50 152 50 C142 58 134 68 132 80
             C155 66 182 60 205 66 C190 72 178 82 174 96
             C195 92 215 98 228 112
             C205 108 185 112 172 122
             C150 132 110 132 90 122
             C68 132 34 132 15 118 Z"
          fill={color}
        />
        <ellipse cx="40" cy="88" rx="9" ry="7" fill={color} />
        <path d="M33 84 L28 74 L38 80 Z" fill={color} />
        <path d="M46 84 L48 73 L54 82 Z" fill={color} />
        <path
          d="M205 66 C218 56 230 54 240 60 C232 60 224 64 220 72"
          fill="none"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 110" className={`cat-silhouette ${className}`} aria-hidden="true">
      <ellipse cx="120" cy="72" rx="80" ry="30" fill={color} />
      <circle cx="52" cy="54" r="26" fill={color} />
      <path d="M32 42 L26 22 L46 36 Z" fill={color} />
      <path d="M56 34 L58 14 L72 30 Z" fill={color} />
      <path
        d="M190 76 C210 74 220 58 214 40"
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}
