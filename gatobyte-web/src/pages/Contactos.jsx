import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import RoleLinks from "../components/RoleLinks";
import CopyButton from "../components/CopyButton";
import { contactos as data, mbti } from "../data/content";
import { getPositionTitle, roleAnchorId } from "../data/roles";
import entjCat from "../assets/entj-trans.png";
import enfjCat from "../assets/enfj-trans.png";
import infjCat from "../assets/infj-trans.png";
import infpCat from "../assets/infp-trans.png";

const cats = { entj: entjCat, enfj: enfjCat, infj: infjCat, infp: infpCat };
const profiles = [mbti.team.leader, ...mbti.team.members].reduce((acc, m) => {
  acc[m.roleId] = m;
  return acc;
}, {});

export default function Contactos() {
  const allEmails = data.members.map((m) => m.email).join(",");
  const mailAll = `mailto:${allEmails}?subject=${encodeURIComponent(data.teamSubject)}`;

  return (
    <>
      <PageHero {...data.hero} variant="minimal" />

      <section className="section">
        <Reveal className="section-heading">
          <span className="pdf-icon">
            <Icon name="users" size={26} strokeWidth={1.6} />
          </span>
          <h2>Escríbenos</h2>
          <p>{data.intro}</p>
        </Reveal>

        <div className="contact-grid">
          {data.members.map((member, i) => {
            const profile = profiles[member.roleId];
            const title = getPositionTitle(member.roleId);
            return (
              <Reveal
                key={member.roleId}
                delay={i * 70}
                id={roleAnchorId("contactos", member.roleId)}
                className="contact-card-wrap"
              >
                <article className="contact-card" style={{ "--member-color": profile?.accent }}>
                  <div className="contact-card-image">
                    <img src={cats[profile?.image]} alt={`Gato de ${member.name}`} loading="lazy" />
                  </div>
                  <h3>{member.name}</h3>
                  {title && <p className="contact-role">{title}</p>}
                  {profile && <p className="contact-tagline">{profile.role}</p>}
                  <a className="contact-email" href={`mailto:${member.email}`}>
                    <Icon name="link" size={14} strokeWidth={2.2} />
                    {member.email}
                  </a>
                  <div className="contact-actions">
                    <CopyButton text={member.email} label="Copiar correo" />
                    <a className="copy-btn" href={`mailto:${member.email}`}>
                      <Icon name="external" size={14} strokeWidth={2.2} />
                      Escribir
                    </a>
                  </div>
                  <RoleLinks role={member.roleId} page="contactos" />
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} className="contact-all">
          <a className="btn btn-solid" href={mailAll}>
            <Icon name="users" size={16} strokeWidth={2.2} />
            Escribir a todo el equipo
          </a>
          <CopyButton text={allEmails} label="Copiar los 5 correos" />
          <p>{data.note}</p>
        </Reveal>
      </section>
    </>
  );
}
