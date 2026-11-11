# Monitoreo del Área de Big Data y Analítica

Stack de monitoreo con Grafana + Prometheus que alimenta la página «Monitoreo con Grafana» del sitio.

## Qué mide

- **Servicios** (Blackbox exporter): disponibilidad HTTP y latencia de AXS, Entel, Starlink, el Sistema de Inventario y Tableau.
- **Equipo** (Node exporter): CPU, memoria y tráfico de red de la máquina que ejecuta el stack.

## Cómo levantarlo

```bash
cd monitoring
docker compose up -d
```

- Grafana: http://localhost:3000 (vista anónima de solo lectura; el tablero es el de inicio).
- Prometheus: http://localhost:9090

Para detenerlo: `docker compose down`.

## Notas

- Las mediciones salen de la máquina donde corre Docker, no de la oficina de la empresa ficticia.
- El panel en vivo del sitio (`gatobyte-web/api/probe.js`) mide los mismos servicios desde una función de Vercel.
