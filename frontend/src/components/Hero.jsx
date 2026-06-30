import heroBg from "../assets/IMG_TM_MPHAHLELE.jpg";
import useTypewriter from "../hooks/useTypewriter";

export default function Hero({ profile }) {
  const greeting = profile ? `I am ${profile.name}` : "";
  const { displayed, done } = useTypewriter(greeting, 70);

  if (!profile) return null;

  return (
    <section id="hero" className="hero">
      <img src={heroBg} alt="" className="hero__bg" />
      <div className="hero__overlay" />

      <div className="hero__content">
        <h2 className="hero__greeting">
          {displayed}
          <span className={`hero__cursor ${done ? "hero__cursor--done" : ""}`}>|</span>
        </h2>
        <p className="hero__role">Software Developer</p>
      </div>
    </section>
  );
}
