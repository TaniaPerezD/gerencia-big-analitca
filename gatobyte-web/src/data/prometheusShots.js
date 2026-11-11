// Capturas reales de la interfaz de Prometheus (src/assets/prometheus/).
import latencia from "../assets/prometheus/01-latencia-servicios.jpg";
import disponibilidad from "../assets/prometheus/02-disponibilidad-servicios.jpg";
import objetivos from "../assets/prometheus/03-estado-de-objetivos.jpg";

export const prometheusShots = [
  {
    title: "Latencia de cada servicio",
    text: "Consulta probe_duration_seconds: cuánto tarda en responder cada servicio, medido cada 15 segundos.",
    alt: "Gráfico de Prometheus con la latencia en segundos de AXS, Entel, Starlink, el Sistema de Inventario y Tableau",
    src: latencia,
  },
  {
    title: "Disponibilidad de los servicios",
    text: "Consulta probe_success: 1 significa que el servicio respondió; 0, que falló.",
    alt: "Tabla de Prometheus con probe_success igual a 1 para los cinco servicios monitoreados",
    src: disponibilidad,
  },
  {
    title: "Estado de los objetivos",
    text: "Status → Target health: Prometheus recolectando del equipo, de sí mismo y del sondeador de servicios.",
    alt: "Página de objetivos de Prometheus con los tres grupos de recolección en estado UP",
    src: objetivos,
  },
];
