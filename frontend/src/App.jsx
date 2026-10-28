import { useCallback, useEffect, useState } from "react";
import {
  getProfile,
  getAbout,
  getEducation,
  getExperience,
  getAchievements,
  getProjects,
} from "./api";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import "./App.css";

function getProjectSlug() {
  const match = window.location.hash.match(/^#project\/([^/]+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projectSlug, setProjectSlug] = useState(getProjectSlug);

  const returnToProjects = useCallback(() => {
    window.history.pushState(null, "", "#portfolio");
    setProjectSlug(null);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  useEffect(() => {
    const syncProjectRoute = () => setProjectSlug(getProjectSlug());
    window.addEventListener("hashchange", syncProjectRoute);
    return () => window.removeEventListener("hashchange", syncProjectRoute);
  }, []);

  useEffect(() => {
    async function load() {
      try {
        const [profile, about, education, experience, achievements, projects] =
          await Promise.all([
            getProfile(),
            getAbout(),
            getEducation(),
            getExperience(),
            getAchievements(),
            getProjects(),
          ]);
        setData({ profile, about, education, experience, achievements, projects });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading__spinner" />
        <p>Loading portfolio...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="loading loading--error">
        <p>Could not load portfolio.</p>
        <p>Start the backend: <code>npm run dev:backend</code></p>
        <code>{error}</code>
      </div>
    );
  }

  const project = data.projects.find((item) => item.slug === projectSlug);
  return (
    <div className="layout">
      <div className="main">
        {project ? (
          <ProjectDetails project={project} onBack={returnToProjects} />
        ) : (
          <>
            <Hero profile={data.profile} />
            <About about={data.about} profile={data.profile} />
            <Skills skills={data.about.skills} />
            <Resume
              education={data.education}
              experience={data.experience}
              achievements={data.achievements}
            />
            <Portfolio projects={data.projects} />
            <Contact profile={data.profile} />
          </>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
