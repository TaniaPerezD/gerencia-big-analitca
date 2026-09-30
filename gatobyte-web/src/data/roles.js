import { descripcionPosiciones } from "./content";

export const rolePages = [
  {
    key: "scrum",
    label: "Scrum del equipo",
    short: "Scrum",
    icon: "activity",
    path: "/scrum-del-equipo",
  },
  {
    key: "mbti",
    label: "MBTI del equipo",
    short: "MBTI",
    icon: "sparkles",
    path: "/mbti-del-equipo",
  },
  {
    key: "posiciones",
    label: "Descripción de posiciones",
    short: "Puesto",
    icon: "file",
    path: "/descripcion-de-posiciones",
  },
];

export const roles = [
  {
    id: "gerente-datos-analitica",
    person: "Tania Peréz",
    pages: ["scrum", "mbti", "posiciones"],
  },
  {
    id: "analista-bi",
    person: "Dilan Mamani",
    pages: ["scrum", "mbti", "posiciones"],
  },
  {
    id: "infraestructura-datos",
    person: "Adriana Rocha",
    pages: ["scrum", "mbti", "posiciones"],
  },
  {
    id: "gobernanza-datos",
    person: "Ivonne Colque",
    pages: ["scrum", "mbti", "posiciones"],
  },
  {
    id: "pm-ciencia-datos",
    person: "Ignacio Retamozo",
    pages: ["scrum", "mbti", "posiciones"],
  },
];

const positionTitles = descripcionPosiciones.positions.reduce((acc, position) => {
  acc[position.roleId] = position.title;
  return acc;
}, {});

export function getRole(roleId) {
  return roles.find((role) => role.id === roleId);
}

export function getPositionTitle(roleId) {
  return positionTitles[roleId] || null;
}

export function roleAnchorId(pageKey, roleId) {
  return `rol-${pageKey}-${roleId}`;
}

export function roleHref(pageKey, roleId) {
  const page = rolePages.find((p) => p.key === pageKey);
  if (!page) return null;
  return `${page.path}#${roleAnchorId(pageKey, roleId)}`;
}
