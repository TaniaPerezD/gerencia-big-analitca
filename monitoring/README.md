# Monitoreo del Área de Big Data y Analítica

Stack de monitoreo con Prometheus que alimenta la página «Monitoreo con Prometheus» del sitio.

## Qué mide

- **Servicios** (Blackbox exporter): disponibilidad HTTP y latencia de AXS, Entel, Starlink, el Sistema de Inventario y Tableau.
- **Equipo** (Node exporter): CPU, memoria y tráfico de red de la máquina que ejecuta el stack.

## Cómo levantarlo

```bash
cd monitoring
docker compose up -d
```

- Prometheus: http://localhost:9090 (pestaña *Graph* para consultas y *Status → Targets* para ver los objetivos).

Para detenerlo: `docker compose down`.

## Consultas útiles (PromQL)

- Disponibilidad por servicio: `probe_success{job="servicios"}`
- Latencia por servicio (s): `probe_duration_seconds{job="servicios"}`
- Uso de CPU del equipo (%): `100 - avg(rate(node_cpu_seconds_total{mode="idle"}[1m])) * 100`

## Notas

- Las mediciones salen de la máquina donde corre Docker, no de la oficina de la empresa ficticia.
- El panel en vivo del sitio (`gatobyte-web/api/probe.js`) mide los mismos servicios desde una función de Vercel.
- Grafana se puede añadir como capa de tableros sobre este mismo Prometheus (fuente de datos `http://prometheus:9090`).
