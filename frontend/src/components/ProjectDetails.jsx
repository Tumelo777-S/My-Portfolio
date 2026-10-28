export default function ProjectDetails({ project, onBack }) {
  if (!project) return null;

  return (
    <main className="project-details">
      <header className="project-details__header">
        <a className="hero__brand" href="#hero">
          Tumelo Mphahlele <span>/ PORTFOLIO</span>
        </a>
        <a
          className="project-details__back"
          href="#portfolio"
          onClick={(event) => {
            event.preventDefault();
            onBack();
          }}
        >
          <span aria-hidden="true">←</span> All projects
        </a>
      </header>

      <article className="project-details__content">
        <p className="project-details__eyebrow">PROJECT OVERVIEW</p>
        <h1>{project.title}</h1>
        <p className="project-details__summary">{project.description}</p>

        <div className="project-details__image">
          <img src={project.image} alt={`${project.title} project`} />
        </div>

        <div className="project-details__body">
          <section className="project-details__overview">
            <h2>Project overview</h2>
            <p>{project.overview || project.description}</p>
            {project.highlights?.length > 0 && (
              <>
                <h3>Key capabilities</h3>
                <ul className="project-details__highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </>
            )}
          </section>

          <section>
            <h2>Technology</h2>
            <ul className="project-details__tech">
              {project.tech.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </section>

          {project.implementation && (
            <section className="project-details__implementation">
              <h2>Implementation</h2>
              <p>{project.implementation}</p>
            </section>
          )}

          {project.demos?.length > 0 && (
            <section className="project-details__demos">
              <h2>Project demonstrations</h2>
              {project.demos.map((demo) => (
                <details className="project-details__demo" key={demo.label}>
                  <summary>{demo.label} simulator</summary>
                  <video controls preload="none" aria-label={`${demo.label} simulator video`}>
                    <source src={demo.video} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                </details>
              ))}
            </section>
          )}

          {project.link && (
            <a
              className="hero__action hero__action--primary project-details__external-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              {project.id === 2 ? "WATCH PROJECT WALKTHROUGH" : "OPEN PROJECT"}{" "}
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </article>
    </main>
  );
}
