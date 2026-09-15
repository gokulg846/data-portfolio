import { projects } from '../content/projects';
import { sitePath } from '../lib/site-path';

const impact = [
  ["10,000+", "industrial sensors supported by analytics workflows"],
  ["25%", "reduction in equipment downtime"],
  ["80%", "faster engineering-document retrieval"],
  ["20+ hrs", "manual analysis removed each week"],
];

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
          <a href="mailto:gokulg846@gmail.com">Contact</a>
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
              <a className="button" href="#experience">Career impact <span>↓</span></a>
              <a className="text-link" href="mailto:gokulg846@gmail.com">Email me ↗</a>
            </div>
          </div>
        </div>
        <div className="system-flow" aria-label="Data product workflow">
          {['INGEST', 'TRANSFORM', 'MODEL', 'EVALUATE', 'SERVE'].map((step, index) => (
            <div key={step}><span>0{index + 1}</span><strong>{step}</strong></div>
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
              <a href={sitePath(`/projects/${project.slug}/`)} aria-label={`Read the ${project.title} case study`}>Read case study <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="impact" id="experience" aria-labelledby="impact-title">
        <div className="impact-intro">
          <p className="eyebrow">CAREER IMPACT</p>
          <h2 id="impact-title">Data work measured in operating outcomes.</h2>
          <p>Experience across industrial analytics, engineering automation, computer vision, and enterprise AI systems.</p>
        </div>
        <div className="impact-grid">
          {impact.map(([metric, description]) => (
            <div key={metric}><strong>{metric}</strong><p>{description}</p></div>
          ))}
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
