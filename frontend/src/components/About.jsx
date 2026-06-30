import tumeloPhoto from "../assets/Tumelo.png";

export default function About({ about, profile }) {
  if (!about || !profile) return null;

  const paragraphs = about.bio.split("\n\n").filter(Boolean);

  return (
    <section id="about" className="section about">
      <div className="section-title">
        <h2>About Me</h2>
      </div>

      <div className="about__grid">
        <div className="about__image animate-fade-in">
          <img src={tumeloPhoto} alt={profile.name} />
        </div>

        <div className="about__content">
          <h3>{profile.subtitle}</h3>
          {paragraphs.map((p) => (
            <p key={p.slice(0, 30)} className="about__bio">
              {p}
            </p>
          ))}

          <div className="about__details">
            <ul>
              <li>
                <strong>Phone:</strong> <span>{profile.phone}</span>
              </li>
              <li>
                <strong>City:</strong> <span>{profile.city}</span>
              </li>
              <li>
                <strong>Degree:</strong> <span>{profile.degree}</span>
              </li>
            </ul>
            <ul>
              <li>
                <strong>Age:</strong> <span>{profile.age}</span>
              </li>
              <li>
                <strong>Email:</strong> <span>{profile.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
