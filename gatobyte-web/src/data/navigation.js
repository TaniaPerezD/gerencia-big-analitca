export const navGroups = [
  {
    label: null,
    links: [{ to: "/", label: "Inicio", icon: "home" }],
  },
  {
    label: "Fundamentos",
    links: [
      { to: "/gestion-de-tecnologia", label: "Gestión de Tecnología", icon: "compass" },
      { to: "/ciencia-e-innovacion", label: "Ciencia e Innovación", icon: "microscope" },
      { to: "/mision-y-vision", label: "Misión y Visión", icon: "target" },
    ],
  },
  {
    label: "Equipo",
    links: [
      { to: "/organizacion", label: "Organización", icon: "network" },
      { to: "/descripcion-de-posiciones", label: "Descripción de Posiciones", icon: "file" },
      { to: "/mbti-del-equipo", label: "MBTI del Equipo", icon: "sparkles" },
      { to: "/scrum-del-equipo", label: "Scrum del Equipo", icon: "activity" },
      { to: "/contactos", label: "Contactos", icon: "users" },
    ],
  },
  {
    label: "Procesos y datos",
    links: [
      { to: "/idef0", label: "Modelado IDEF0", icon: "layers" },
      { to: "/bpmn-del-equipo", label: "BPMN del Equipo", icon: "refresh" },
      { to: "/datos-tableau", label: "Datos y Tableau", icon: "trending" },
      { to: "/patrones-weka", label: "Patrones con Weka", icon: "puzzle" },
      { to: "/monitoreo-prometheus", label: "Monitoreo con Prometheus", icon: "server" },
    ],
  },
  {
    label: "Finanzas",
    links: [
      { to: "/presupuesto", label: "Presupuesto", icon: "landmark" },
      { to: "/analisis-de-servicios", label: "Análisis de servicios", icon: "database" },
    ],
  },
];

export const navLinks = navGroups.flatMap((g) =>
  g.links.map((l) => ({ ...l, group: g.label || "General" }))
);
