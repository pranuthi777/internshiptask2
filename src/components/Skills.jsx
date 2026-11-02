import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="section-title text-center">Skills</h2>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5 g-3 mt-2">
          {skills.map((skill) => (
            <div className="col" key={skill.name}>
              <div className="card skill-card h-100 text-center shadow-sm">
                <div className="card-body">
                  <i className={`${skill.icon} skill-icon`}></i>
                  <p className="mb-0 mt-2 fw-semibold">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
