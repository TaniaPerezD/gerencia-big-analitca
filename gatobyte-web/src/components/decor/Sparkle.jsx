export default function Sparkle({ top, left, right, bottom, size = 22, delay = 0, color = "#c9723f" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className="sparkle"
      style={{ top, left, right, bottom, animationDelay: `${delay}s`, color }}
      aria-hidden="true"
    >
      <path
        d="M12 0 C12.5 6.5 13.5 9.5 24 12 C13.5 14.5 12.5 17.5 12 24 C11.5 17.5 10.5 14.5 0 12 C10.5 9.5 11.5 6.5 12 0 Z"
        fill="currentColor"
      />
    </svg>
  );
}
