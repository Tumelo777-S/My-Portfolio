import useInView from "../hooks/useInView";

const PORTFOLIO_VIEW_OPTIONS = { threshold: 0 };

export default function Portfolio({ projects }) {
  const [ref, inView] = useInView(PORTFOLIO_VIEW_OPTIONS);

  if (!projects?.length) return null;

  return (
    <section id="portfolio" className="section portfolio" ref={ref}>
      <div className="section-title">
        <h2>Portfolio</h2>
        <p>Key Projects</p>
      </div>

      <div className="portfolio__grid">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`portfolio__card ${inView ? "portfolio__card--visible" : ""}`}
            style={{ "--reveal-delay": `${index * 100}ms` }}
          >
            <div className="portfolio__image">
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="portfolio__placeholder">{project.title.charAt(0)}</div>
            </div>
            <div className="portfolio__info">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="portfolio__tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {project.demos?.length > 0 && (
                <div className="portfolio__demos" aria-label="Simulator demos">
                  {project.demos.map((demo) => (
                    <details className="portfolio__demo" key={demo.label}>
                      <summary>View {demo.label} Simulator</summary>
                      <video
                        controls
                        preload="none"
                        aria-label={`${demo.label} simulator video`}
                      >
                        <source src={demo.video} type="video/mp4" />
                        Your browser does not support video playback.
                      </video>
                    </details>
                  ))}
                </div>
              )}
              <div className="portfolio__actions">
                <a className="portfolio__link" href={`#project/${project.slug}`}>
                  Project details <span aria-hidden="true">↗</span>
                </a>
                {project.link && (
                  <a
                    className="portfolio__link portfolio__link--secondary"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.id === 2 ? "Watch walkthrough" : "View project"}{" "}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
