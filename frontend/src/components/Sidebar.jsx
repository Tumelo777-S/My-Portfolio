import tumeloPhoto from "../assets/Tumelo.png";

const links = [
  { href: "#hero", label: "Home", icon: "⌂" },
  { href: "#about", label: "About", icon: "◎" },
  { href: "#skills", label: "Skills", icon: "◈" },
  { href: "#resume", label: "Resume", icon: "☰" },
  { href: "#portfolio", label: "Portfolio", icon: "▦" },
  { href: "#contact", label: "Contact", icon: "✉" },
];

export default function Sidebar({ profile, open, onToggle, onNavigate }) {
  if (!profile) return null;

  return (
    <>
      <button
        type="button"
        className="sidebar-toggle"
        aria-label="Toggle menu"
        onClick={onToggle}
      >
        ☰
      </button>

      <aside className={`sidebar ${open ? "sidebar--open" : ""}`}>
        <div className="sidebar__profile">
          <img
            src={tumeloPhoto}
            alt={profile.name}
            className="sidebar__avatar"
          />
          <h1 className="sidebar__name">{profile.name}</h1>
          <p className="sidebar__role">Software Developer</p>
        </div>

        <div className="sidebar__social">
          <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            IG
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            in
          </a>
        </div>

        <nav className="sidebar__nav">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={onNavigate}>
                  <span className="sidebar__icon">{link.icon}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {open && <div className="sidebar-overlay" onClick={onNavigate} />}
    </>
  );
}
