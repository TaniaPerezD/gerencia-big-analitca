import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Document, Page, pdfjs } from "react-pdf";
import Icon from "./Icon";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const ZOOM_STEP = 0.15;
const ZOOM_MIN = 0.6;
const ZOOM_MAX = 2.1;
const MAX_DOTS = 14;

export default function PdfViewer({ src, title, downloadName }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [failed, setFailed] = useState(false);

  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width;
      if (w) setContainerWidth(w);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goPrev = useCallback(() => setPageNumber((p) => Math.max(1, p - 1)), []);
  const goNext = useCallback(
    () => setPageNumber((p) => Math.min(numPages || p, p + 1)),
    [numPages]
  );

  useEffect(() => {
    if (!isFullscreen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setIsFullscreen(false);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isFullscreen, goNext, goPrev]);

  const zoomOut = () => setZoom((z) => Math.max(ZOOM_MIN, +(z - ZOOM_STEP).toFixed(2)));
  const zoomIn = () => setZoom((z) => Math.min(ZOOM_MAX, +(z + ZOOM_STEP).toFixed(2)));

  const pageWidth = containerWidth ? containerWidth * zoom : undefined;
  const showDots = numPages && numPages <= MAX_DOTS;

  const viewer = (
    <div className={`pdf-viewer${isFullscreen ? " pdf-viewer-fullscreen" : ""}`}>
      <div className="pdf-viewer-toolbar">
        <div className="pdf-viewer-title">
          <span className="pdf-viewer-title-icon">
            <Icon name="file" size={19} strokeWidth={1.8} />
          </span>
          <div className="pdf-viewer-title-text">
            <strong>{title}</strong>
            <span className="pdf-viewer-meta">{numPages ? `${numPages} páginas · PDF` : "PDF"}</span>
          </div>
        </div>

        <div className="pdf-viewer-actions">
          <div className="pdf-viewer-zoom">
            <button
              type="button"
              className="pdf-tool-btn"
              onClick={zoomOut}
              disabled={zoom <= ZOOM_MIN}
              aria-label="Alejar"
            >
              <Icon name="zoomOut" size={16} strokeWidth={2.1} />
            </button>
            <span className="pdf-zoom-value">{Math.round(zoom * 100)}%</span>
            <button
              type="button"
              className="pdf-tool-btn"
              onClick={zoomIn}
              disabled={zoom >= ZOOM_MAX}
              aria-label="Acercar"
            >
              <Icon name="zoomIn" size={16} strokeWidth={2.1} />
            </button>
          </div>

          <span className="pdf-viewer-divider" />

          <button
            type="button"
            className="pdf-tool-btn"
            onClick={() => setIsFullscreen((f) => !f)}
            aria-label={isFullscreen ? "Salir de pantalla completa" : "Ver en pantalla completa"}
          >
            <Icon name={isFullscreen ? "minimize" : "maximize"} size={16} strokeWidth={2.1} />
          </button>
          <a
            className="pdf-tool-btn"
            href={src}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir en pestaña nueva"
          >
            <Icon name="external" size={16} strokeWidth={2.1} />
          </a>
          <a
            className="pdf-tool-btn pdf-tool-btn-accent"
            href={src}
            download={downloadName}
            aria-label="Descargar PDF"
          >
            <Icon name="download" size={16} strokeWidth={2.1} />
          </a>
        </div>
      </div>

      <div className="pdf-viewer-stage">
        <button
          type="button"
          className="pdf-nav pdf-nav-prev"
          onClick={goPrev}
          disabled={pageNumber <= 1}
          aria-label="Página anterior"
        >
          <Icon name="chevronLeft" size={19} strokeWidth={2.3} />
        </button>

        <div className="pdf-viewer-page-wrap" ref={wrapRef}>
          {failed ? (
            <PdfFallback src={src} downloadName={downloadName} />
          ) : (
            <Document
              file={src}
              onLoadSuccess={({ numPages: n }) => {
                setNumPages(n);
                setFailed(false);
              }}
              onLoadError={() => setFailed(true)}
              loading={<PdfSpinner />}
              error={<PdfFallback src={src} downloadName={downloadName} />}
            >
              {pageWidth ? (
                <Page
                  pageNumber={pageNumber}
                  width={pageWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  loading={<PdfSpinner />}
                  className="pdf-page"
                />
              ) : (
                <PdfSpinner />
              )}
            </Document>
          )}
        </div>

        <button
          type="button"
          className="pdf-nav pdf-nav-next"
          onClick={goNext}
          disabled={!numPages || pageNumber >= numPages}
          aria-label="Página siguiente"
        >
          <Icon name="chevronRight" size={19} strokeWidth={2.3} />
        </button>
      </div>

      {numPages ? (
        <div className="pdf-viewer-footer">
          <span className="pdf-page-indicator">
            Página {pageNumber} de {numPages}
          </span>
          {showDots ? (
            <div className="pdf-dots">
              {Array.from({ length: numPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`pdf-dot${i + 1 === pageNumber ? " pdf-dot-active" : ""}`}
                  onClick={() => setPageNumber(i + 1)}
                  aria-label={`Ir a la página ${i + 1}`}
                />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );

  return isFullscreen ? createPortal(viewer, document.body) : viewer;
}

function PdfSpinner() {
  return (
    <div className="pdf-spinner">
      <Icon name="refresh" size={26} strokeWidth={2} className="pdf-spin" />
    </div>
  );
}

function PdfFallback({ src, downloadName }) {
  return (
    <div className="pdf-fallback">
      <span className="pdf-icon">
        <Icon name="file" size={28} strokeWidth={1.6} />
      </span>
      <p>No se pudo mostrar la vista previa en este navegador.</p>
      <a className="btn btn-primary" href={src} download={downloadName}>
        <Icon name="download" size={16} strokeWidth={2} /> Descargar PDF
      </a>
    </div>
  );
}
