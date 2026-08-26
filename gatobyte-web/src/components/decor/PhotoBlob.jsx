export default function PhotoBlob({ src, alt, className = "" }) {
  return (
    <div className={`photo-blob ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}
