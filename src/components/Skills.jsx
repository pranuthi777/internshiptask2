import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section className="section container">
      <div className="section-head">
        <div>
          <p className="kicker">Skills</p>
          <h2>What I work with</h2>
        </div>
      </div>

      <div className="skill-grid">
        {skillGroups.map((group, index) => (
          <div key={group.title} className="skill-card">
            <span className="skill-number">0{index + 1}</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul className="chips">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
