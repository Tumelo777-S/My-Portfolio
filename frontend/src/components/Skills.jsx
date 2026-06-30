import useInView from "../hooks/useInView";

export default function Skills({ skills }) {
  const [ref, inView] = useInView();

  if (!skills?.length) return null;

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="section-title">
        <h2>Skills &amp; Languages</h2>
        <p>Proficiency ranking</p>
      </div>

      <div className="skills__grid">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`skill ${inView ? "skill--animate" : ""}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill__header">
              <span className="skill__name">{skill.name}</span>
              <span className="skill__level">{skill.level}%</span>
            </div>
            <div className="skill__bar">
              <div
                className="skill__fill"
                style={{ width: inView ? `${skill.level}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
