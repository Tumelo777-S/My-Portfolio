export default function Resume({ education, experience, achievements }) {
  return (
    <section id="resume" className="section resume">
      <div className="section-title">
        <h2>Resume</h2>
      </div>

      <div className="resume__grid">
        <div>
          <h3 className="resume__heading">Education</h3>
          {education.map((item) => (
            <article key={item.id} className="resume__item">
              <h4>{item.degree}</h4>
              <h5>{item.period}</h5>
              <p>
                <em>{item.school}</em>
              </p>
            </article>
          ))}
        </div>

        <div>
          <h3 className="resume__heading">Experience</h3>
          {experience.map((job) => (
            <article key={job.id} className="resume__item">
              <h4>{job.role}</h4>
              <h5>{job.period}</h5>
              <p>
                <em>{job.company}</em>
              </p>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}

          <h3 className="resume__heading">Achievements</h3>
          {achievements.map((item) => (
            <article key={item.id} className="resume__item">
              <h4>{item.title}</h4>
              <h5>{item.period}</h5>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
