import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section className="section">
      <h2>What I work with</h2>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill.name}>
            {skill.name} <span className="muted">— {skill.note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
