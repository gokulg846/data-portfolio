import { projects } from '../content/projects';
import { analyticsHighlights, technicalCapabilities, technicalExperience, technologyIcons } from '../content/experience';
import { sitePath } from '../lib/site-path';
import { BrainCircuit, Network, Search, ShieldCheck } from 'lucide-react';

const aiCapabilities = [
  ['LLM evaluation', BrainCircuit],
  ['Retrieval-augmented generation', Search],
  ['Model Context Protocol', Network],
  ['AI governance', ShieldCheck],
] as const;

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Gokul Gopalakrishnan, home">
          GG<span>/DATA</span>
        </a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-status">
          <span>DATA SYSTEMS · APPLIED ML · ANALYTICS</span>
          <span>WEST LAFAYETTE, IN</span>
        </div>
        <div className="hero-grid">
          <div className="hero-main">
            <p className="eyebrow">GOKUL GOPALAKRISHNAN</p>
            <h1>I build data and ML systems that turn complex signals into useful decisions.</h1>
          </div>
          <div className="hero-copy">
            <p>
              My work spans data pipelines, applied machine learning, industrial analytics,
              computer vision, and AI-assisted workflows.
            </p>
            <p>
              I work across the full system, from preparing the data and choosing an approach
              to evaluating the output and building the interface people use to act on it.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View projects <span>↓</span></a>
              <a className="button" href="#experience">Career experience <span>↓</span></a>
              <a className="button" href="mailto:gokulg846@gmail.com">Email me <span>↗</span></a>
            </div>
          </div>
        </div>
        <div className="analytics-rail" aria-label="Selected analytics work">
          {analyticsHighlights.map((item) => (
            <article key={item.title}>
              <strong>{item.metric}</strong>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </header>

      <section className="section projects" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <div><p className="eyebrow">SELECTED PROJECTS</p><h2 id="projects-title">Systems built from data to decision.</h2></div>
          <p>Each case study follows the data, the method, the system, and the evidence used to judge it.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top"><span>{project.index}</span><p>{project.type}</p></div>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <p className="project-detail">{project.detail}</p>
              <ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="project-links">
                <a href={sitePath(`/projects/${project.slug}/`)} aria-label={`Show more details about ${project.title}`}>Show more details <span>→</span></a>
                <a href={project.repository} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>GitHub <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience" id="experience" aria-labelledby="experience-title">
        <div className="experience-heading">
          <div>
            <p className="eyebrow">TECHNICAL EXPERIENCE</p>
            <h2 id="experience-title">The analysis behind the outcomes.</h2>
          </div>
          <p>Production pipelines, statistical analysis, machine learning, experimentation, and AI evaluation across consulting, manufacturing, research, and startups.</p>
        </div>
        <div className="experience-list">
          {technicalExperience.map((entry) => (
            <article key={entry.company}>
              <header><div><p>{entry.company}</p><h3>{entry.role}</h3></div><span>{entry.period}</span></header>
              <p className="experience-summary">{entry.summary}</p>
              <ul className="experience-work">{entry.work.map((item) => <li key={item}>{item}</li>)}</ul>
              <ul className="experience-stack">{entry.stack.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities" aria-labelledby="capabilities-title">
        <div>
          <p className="eyebrow">TECHNICAL RANGE</p>
          <h2 id="capabilities-title">Built across the data stack.</h2>
          <div className="technology-icons" aria-label="Technologies used">
            {technologyIcons.map(([name, slug]) => (
              <div key={name} data-label={name} tabIndex={0} aria-label={name}>
                <img src={`https://cdn.simpleicons.org/${slug}`} alt={name} loading="lazy" />
              </div>
            ))}
            {aiCapabilities.map(([name, Icon]) => (
              <div className="ai-capability-icon" key={name} data-label={name} tabIndex={0} aria-label={name}>
                <Icon aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
        <div className="capability-grid">
          {technicalCapabilities.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>

      <footer id="contact">
        <p className="eyebrow">LET&apos;S TALK</p>
        <h2>Looking for someone who can work across data, models, and the systems around them?</h2>
        <div className="footer-links">
          <a href="mailto:gokulg846@gmail.com">Email <span>↗</span></a>
          <a href="https://www.linkedin.com/in/gokulgopal" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          <a href="https://github.com/gokulg846" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
        </div>
      </footer>
    </main>
  );
}
