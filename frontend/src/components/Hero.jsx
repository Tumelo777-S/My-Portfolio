import { useEffect, useState } from "react";
import heroBg from "../assets/IMG_TM_MPHAHLELE.jpg";

const BUILD_CATEGORIES = [
  "web applications",
  "e-commerce platforms",
  "booking systems",
  "image-analysis tools",
  "interactive simulations",
];

export default function Hero({ profile }) {
  const [categoryIndex, setCategoryIndex] = useState(0);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) return undefined;

    const interval = window.setInterval(() => {
      setCategoryIndex((currentIndex) => (currentIndex + 1) % BUILD_CATEGORIES.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, []);

  if (!profile) return null;

  return (
    <section id="hero" className="hero">
      <div className="hero__frame">
        <img src={heroBg} alt="" className="hero__bg" />
        <div className="hero__overlay" />

        <header className="hero__header">
          <a className="hero__brand" href="#hero" aria-label={`${profile.name} home`}>
            {profile.name}
            <span> / PORTFOLIO</span>
          </a>
          <nav className="hero__nav" aria-label="Main navigation">
            <a href="#portfolio"><span>01</span> WORK</a>
            <a href="#resume"><span>02</span> EXPERIENCE</a>
            <a href="#about"><span>03</span> ABOUT</a>
            <a href="#contact"><span>04</span> CONTACT</a>
          </nav>
          <div className="hero__socials" aria-label="Social profiles">
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.41h2.67ZM7 8.24a1.55 1.55 0 1 1 .02-3.1A1.55 1.55 0 0 1 7 8.24ZM18.33 18h-2.66v-4.18c0-1-.02-2.29-1.4-2.29s-1.62 1.09-1.62 2.22V18H9.99V9.41h2.55v1.17h.04a2.8 2.8 0 0 1 2.51-1.38c2.69 0 3.19 1.77 3.19 4.07Z" />
                </svg>
              </a>
            )}
            {profile.instagram && (
              <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4Zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                </svg>
              </a>
            )}
          </div>
        </header>

        <div className="hero__content">
          <p className="hero__eyebrow">FINAL-YEAR COMPUTER SCIENCE STUDENT <span> / </span> JOHANNESBURG</p>
          <h1 className="hero__greeting">
            <span>I build</span>
            <span
              key={BUILD_CATEGORIES[categoryIndex]}
              className="hero__headline-accent hero__headline-swap"
              aria-live="polite"
              aria-atomic="true"
            >
              {BUILD_CATEGORIES[categoryIndex]}
            </span>
            <span>for real-world problems.</span>
          </h1>
          <p className="hero__role">{profile.subtitle}</p>
          <div className="hero__actions">
            <a className="hero__action hero__action--primary" href="#portfolio">
              VIEW SELECTED WORK <span aria-hidden="true">↗</span>
            </a>
            <a className="hero__action" href="#contact">LET&apos;S TALK</a>
          </div>
        </div>

        <div className="hero__footer">
          <span>DESIGN-MINDED DEVELOPER <span>/</span> BUILDING FOR PEOPLE</span>
          <a href="#portfolio">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  );
}
