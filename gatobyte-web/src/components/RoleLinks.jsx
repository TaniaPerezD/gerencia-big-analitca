import { Link } from "react-router-dom";
import Icon from "./Icon";
import { getRole, roleAnchorId, rolePages } from "../data/roles";

export default function RoleLinks({ role, page, tone = "light" }) {
  const data = getRole(role);
  if (!data) return null;

  const targets = rolePages.filter((p) => p.key !== page && data.pages.includes(p.key));
  if (targets.length === 0) return null;

  return (
    <div className={`role-links role-links-${tone}`}>
      <span className="role-links-label">
        <Icon name="link" size={13} strokeWidth={2.2} />
        Ver también
      </span>
      {targets.map((p) => (
        <Link
          key={p.key}
          to={`${p.path}#${roleAnchorId(p.key, data.id)}`}
          className="role-link"
          title={`Ver ${p.label} de ${data.person}`}
        >
          <Icon name={p.icon} size={13} strokeWidth={2.2} />
          {p.short}
        </Link>
      ))}
    </div>
  );
}
