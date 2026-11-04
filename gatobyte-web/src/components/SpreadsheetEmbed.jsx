import { useEffect, useState } from "react";
import Icon from "./Icon";

const numberFormat = new Intl.NumberFormat("es-BO", { maximumFractionDigits: 2 });
const percentFormat = new Intl.NumberFormat("es-BO", { maximumFractionDigits: 2 });

function isEmpty(value) {
  return value === null || value === undefined || String(value).trim() === "";
}

function formatValue(value, row, sheetName, columnIndex) {
  if (isEmpty(value)) return "";
  if (value instanceof Date) return value.toLocaleDateString("es-BO");
  if (typeof value === "boolean") return value ? "Sí" : "No";

  if (typeof value === "number") {
    const isAssumptionPercent =
      sheetName === "Supuestos" &&
      columnIndex === 1 &&
      typeof row[2] === "string" &&
      row[2].includes("%");
    const isBudgetRate =
      sheetName === "Presupuesto" &&
      columnIndex === 4 &&
      value > 0 &&
      value < 1 &&
      isEmpty(row[1]);

    if (isAssumptionPercent || isBudgetRate) {
      return `${percentFormat.format(value * 100)} %`;
    }
    return numberFormat.format(value);
  }

  return String(value);
}

function rowClassName(row, rowIndex) {
  const values = row.filter((value) => !isEmpty(value));
  const first = typeof row[0] === "string" ? row[0].trim() : "";

  if (values.length === 0) return "sheet-empty";
  if (rowIndex === 0) return "sheet-title";

  const isSection =
    values.length === 1 &&
    first.length > 0 &&
    first === first.toUpperCase() &&
    /[A-ZÁÉÍÓÚÑ]/.test(first);
  if (isSection) return "sheet-section";

  if (/^(SUB ?TOTAL|TOTAL|SUMMARY|SUB TOTAL COSTS|TOTAL COSTS)/i.test(first)) {
    return "sheet-total";
  }

  return "";
}

export default function SpreadsheetEmbed({ src, title }) {
  const [sheets, setSheets] = useState([]);
  const [activeSheet, setActiveSheet] = useState("");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const { default: readXlsxFile } = await import("read-excel-file/browser");
        const response = await fetch(src);
        if (!response.ok) throw new Error("No se pudo descargar el archivo.");
        const blob = await response.blob();
        const result = await readXlsxFile(blob);
        if (!active) return;

        const parsed = result.map(({ sheet, data }) => ({ name: sheet, rows: data }));
        setSheets(parsed);
        setActiveSheet(parsed[0]?.name ?? "");
        setStatus("ready");
      } catch {
        if (active) setStatus("error");
      }
    }

    load();
    return () => {
      active = false;
    };
  }, [src]);

  const current = sheets.find((sheet) => sheet.name === activeSheet);
  const rows = current?.rows ?? [];
  const headerIndex = rows.findIndex((row) => row[0] === "ITEM" || row[0] === "Parámetro");

  return (
    <div className="spreadsheet-viewer">
      <div className="spreadsheet-toolbar">
        <div className="spreadsheet-title">
          <span className="spreadsheet-title-icon">
            <Icon name="database" size={19} strokeWidth={1.8} />
          </span>
          <div>
            <strong>{title}</strong>
            <span className="spreadsheet-meta">Vista de solo lectura · XLSX</span>
          </div>
        </div>
        <a className="spreadsheet-download" href={src} download>
          <Icon name="download" size={16} strokeWidth={2} /> Descargar Excel
        </a>
      </div>

      {status === "ready" && sheets.length > 1 && (
        <div className="spreadsheet-tabs" role="tablist" aria-label="Hojas del archivo">
          {sheets.map((sheet) => (
            <button
              key={sheet.name}
              type="button"
              role="tab"
              aria-selected={sheet.name === activeSheet}
              className={`spreadsheet-tab${sheet.name === activeSheet ? " active" : ""}`}
              onClick={() => setActiveSheet(sheet.name)}
            >
              {sheet.name}
            </button>
          ))}
        </div>
      )}

      {status === "loading" && (
        <div className="spreadsheet-status">
          <Icon name="refresh" size={24} strokeWidth={2} className="pdf-spin" />
          <p>Cargando presupuesto…</p>
        </div>
      )}

      {status === "error" && (
        <div className="spreadsheet-status">
          <Icon name="file" size={28} strokeWidth={1.6} />
          <p>No se pudo mostrar la vista previa en este navegador.</p>
          <a className="btn btn-primary" href={src} download>
            <Icon name="download" size={16} strokeWidth={2} /> Descargar Excel
          </a>
        </div>
      )}

      {status === "ready" && current && (
        <div className="spreadsheet-scroll">
          <table className="sheet-table">
            <tbody>
              {rows.map((row, rowIndex) => {
                const className = rowClassName(row, rowIndex);
                if (className === "sheet-empty") {
                  return (
                    <tr key={rowIndex} className="sheet-empty">
                      <td colSpan={row.length} />
                    </tr>
                  );
                }

                return (
                  <tr key={rowIndex} className={className}>
                    {row.map((value, columnIndex) => {
                      const content = formatValue(value, row, current.name, columnIndex);
                      const cellClass = [
                        typeof value === "number" ? "num" : "",
                        columnIndex === 0 ? "first" : "",
                        columnIndex === row.length - 1 ? "wrap" : "",
                      ]
                        .filter(Boolean)
                        .join(" ");

                      if (rowIndex === headerIndex) {
                        return (
                          <th key={columnIndex} className={cellClass} scope="col">
                            {content}
                          </th>
                        );
                      }

                      return (
                        <td key={columnIndex} className={cellClass}>
                          {content}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <div className="spreadsheet-foot">
        <span>
          <Icon name="file" size={14} strokeWidth={2} /> El archivo conserva sus fórmulas y valores editables.
        </span>
        <a href={src} target="_blank" rel="noreferrer">
          Abrir en pestaña nueva <Icon name="external" size={13} strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
