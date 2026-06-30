import useInView from "../hooks/useInView";

export default function Portfolio({ projects }) {
  const [ref, inView] = useInView();

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
            className={`portfolio__card ${inView ? "portfolio__card--animate" : ""}`}
            style={{ animationDelay: `${index * 0.15}s` }}
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
