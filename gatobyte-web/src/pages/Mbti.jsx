import PageHero from "../components/PageHero";
import StatStrip from "../components/StatStrip";
import DefinitionGrid from "../components/DefinitionGrid";
import Accordion from "../components/Accordion";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import entjCat from "../assets/entj-trans.png";
import enfjCat from "../assets/enfj-trans.png";
import infjCat from "../assets/infj-trans.png";
import infpCat from "../assets/infp-trans.png";
import { mbti as data } from "../data/content";

const memberCats = {
  entj: entjCat,
  enfj: enfjCat,
  infj: infjCat,
  infp: infpCat,
};

function MemberCard({ member, memberCats, featured = false, delay = 0 }) {
  return (
    <Reveal delay={delay} className={featured ? "team-featured-wrap" : "team-card-wrap"}>
      <article
        className={featured ? "team-featured" : "team-card"}
        style={{ "--member-color": member.accent }}
      >
        <div className={featured ? "team-featured-image" : "team-card-image"}>
          <img
            src={memberCats[member.image]}
            alt={`Gato ${member.type} — ${member.name}`}
            loading="lazy"
          />
        </div>
        <div className={featured ? "team-featured-body" : "team-card-body"}>
          <span className={featured ? "team-type team-type-outline" : "team-type"}>
            {featured && <Icon name="sparkles" size={13} strokeWidth={2} />}
            {featured ? `Líder · ${member.type}` : member.type}
          </span>
          <h3>{member.name}</h3>
          <p className="team-role">{member.role}</p>
          <p className="team-desc">{member.description}</p>
        </div>
      </article>
    </Reveal>
  );
}

export default function Mbti() {
  return (
    <>
      <PageHero {...data.hero} />

      <section className="section stat-section">
        <StatStrip stats={data.stats} />
      </section>

      <section className="section narrow-section article-section">
        <Reveal>
          <h2>¿Qué es el MBTI?</h2>
          {data.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "drop-cap" : ""}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={100} className="component-list">
          <h4>Cómo se forma cada tipo</h4>
          <ul>
            {data.components.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>Las 4 dicotomías</h2>
          <p>Los cuatro pares de preferencias que definen cómo percibimos y decidimos.</p>
        </Reveal>
        <DefinitionGrid items={data.dichotomies} />
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <h2>Los 16 tipos</h2>
          <p>Los cuatro grandes grupos de personalidad y sus integrantes.</p>
        </Reveal>
        <Accordion items={data.temperaments} />
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>La comunidad de los gatos</h2>
          <p>Cinco gatos, cinco estilos: los MBTI del equipo GatoByte.</p>
        </Reveal>

        <MemberCard member={data.team.leader} memberCats={memberCats} featured />

        <div className="team-grid">
          {data.team.members.map((m, i) => (
            <MemberCard key={m.name} member={m} memberCats={memberCats} delay={i * 70} />
          ))}
        </div>
      </section>
    </>
  );
}