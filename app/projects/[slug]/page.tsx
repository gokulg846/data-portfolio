import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projectBySlug, projects } from '../../../content/projects';
import { sitePath } from '../../../lib/site-path';

type Props = { params: Promise<{ slug: string }> };

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug[slug];
  return project ? { title: `${project.title} | Gokul Gopalakrishnan`, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) notFound();

  const flow = [
    ['01 · DATA', project.data],
    ['02 · METHOD', project.method],
    ['03 · SYSTEM', project.system],
    ['04 · EVALUATION', project.evaluation],
  ];

  return (
    <main className="case-main">
      <nav className="site-nav" aria-label="Case study navigation">
        <a className="wordmark" href={sitePath('/')} aria-label="Data portfolio home">GG<span>/DATA</span></a>
        <a className="case-back" href={sitePath('/#projects')}>← All projects</a>
      </nav>

      <header className="case-hero">
        <div className="case-index"><span>{project.index}</span><p>{project.type}</p></div>
        <h1>{project.title}</h1>
        <p className="case-summary">{project.summary}</p>
        <div className="case-question"><span>THE QUESTION</span><p>{project.question}</p></div>
      </header>

      <section className="case-flow" aria-label="Project technical flow">
        {flow.map(([label, copy]) => (
          <article key={label}><p>{label}</p><div>{copy}</div></article>
        ))}
      </section>

      <section className="case-evidence">
        <div>
          <p className="eyebrow">TECHNICAL STACK</p>
          <ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <p className="eyebrow">BOUNDARIES</p>
          <ul className="limitations">{project.limitations.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <footer className="case-footer">
        <a href={project.repository} target="_blank" rel="noreferrer">View repository <span>↗</span></a>
        <a href={sitePath('/#projects')}>Explore another project <span>→</span></a>
      </footer>
    </main>
  );
}
