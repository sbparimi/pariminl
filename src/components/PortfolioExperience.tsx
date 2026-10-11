import { useEffect, useRef, useState } from 'react';
import { achievements, certifications, experience, profile, projects, skillCategories, type Project } from '../data/portfolio';
import BusinessCard from './BusinessCard';
import QualityLab from './QualityLab';

const projectMeta: Record<string, { company: string; category: string; title: string; lead: string; context: string }> = {
  'ai-evaluation': { company: 'PostNL', category: 'AI systems', title: 'Confidence in every agent decision.', lead: 'RAG · tool calling · multi-agent evaluation', context: 'Production conversational AI needs more than plausible answers. Routing, tool calls and retrieved evidence all need explicit quality controls.' },
  'enterprise-automation': { company: 'Canon Europe', category: 'Enterprise', title: 'Twelve days. Down to three.', lead: 'Automation architecture · release governance', context: 'Enterprise releases cross Salesforce, ERP, BI, CPQ and contract workflows. Confidence depends on reliable coverage and clear release decisions.' },
  'regulated-validation': { company: 'Pfizer / Crossover Health', category: 'Enterprise', title: 'Quality where the stakes are higher.', lead: 'Healthcare · compliance · validation', context: 'Clinical workflows and regulated enterprise processes require risk-based validation and evidence that can be inspected.' },
  jarvis: { company: 'Personal project', category: 'Personal builds', title: 'An AI workspace with a visible trail.', lead: 'Voice · model routing · decision evidence', context: 'A personal exploration of voice-driven assistance, model-provider routing and job-search decisions backed by visible evidence.' },
};

export default function PortfolioExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All work');
  const [project, setProject] = useState<Project | null>(null);
  const [expertise, setExpertise] = useState(0);
  const [activeSection, setActiveSection] = useState('top');
  const categories = ['All work', 'AI systems', 'Enterprise', 'Personal builds'];
  const filtered = projects.filter((item) => filter === 'All work' || projectMeta[item.id].category === filter);
  const nav = [{ id: 'work', name: 'Selected work' }, { id: 'lab', name: 'AI quality lab' }, { id: 'expertise', name: 'Expertise' }, { id: 'journey', name: 'Experience' }];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: '-20% 0px -55% 0px' });
    ['top', 'work', 'lab', 'expertise', 'journey', 'contact'].forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const dismiss = (event: KeyboardEvent) => { if (event.key === 'Escape') { setMenuOpen(false); document.getElementById('portfolio-menu-toggle')?.focus(); } };
    window.addEventListener('keydown', dismiss);
    return () => window.removeEventListener('keydown', dismiss);
  }, [menuOpen]);

  return (
    <div className="p-site">
      <a href="#main" className="p-skip">Skip to content</a>
      <header className="p-header">
        <a href="#top" className="p-brand" aria-label="Suresh Parimi home"><span className="p-brand-mark">sp<span>.</span></span><span className="p-brand-name">SURESH PARIMI<span>QUALITY × INTELLIGENCE</span></span></a>
        <nav className={`p-nav ${menuOpen ? 'is-open' : ''}`} id="portfolio-navigation" aria-label="Main navigation">{nav.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{item.name}</a>)}</nav>
        <button type="button" id="portfolio-menu-toggle" className="p-menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="portfolio-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
      </header>
      <BusinessCard />
      <main id="main" tabIndex={-1}>
        <section id="top" className="p-hero" aria-labelledby="hero-title">
          <div className="p-hero-meta"><span><span className="p-dot" /> AI QUALITY ENGINEERING LEADER</span><span>AMSTERDAM, NL <span className="p-meta-cross">＋</span></span></div>
          <div className="p-hero-grid">
            <div className="p-hero-copy">
              <p className="p-eyebrow">SURESH PARIMI / THE QUALITY SERIES</p>
              <h1 id="hero-title">AI systems.<br />Human trust.<br /><em>Engineered.</em></h1>
              <p className="p-hero-intro">AI Quality Engineering leader focused on agentic AI assurance, test engineering management, automation architecture and release governance—turning complex systems into measurable, release-ready outcomes.</p>
              <div className="p-hero-actions"><a href="#work" className="p-button p-button-primary">Explore my work <span aria-hidden>↗</span></a><a href="#lab" className="p-text-link">Try the AI quality lab <span aria-hidden>→</span></a></div>
              <p className="p-hero-footnote">18+ years in quality engineering <span> / </span> Currently at PostNL</p>
            </div>
            <Architecture />
          </div>
          <div className="p-impact-strip"><div className="p-impact-intro"><span className="p-label">A TRACK RECORD</span><span>Measured in outcomes.</span></div>{achievements.slice(0, 3).map((item, index) => <div key={item.id}><strong>{['12 → 3', '40%', '60%'][index]}<small>{index === 0 ? ' DAYS' : ''}</small></strong><span>{['regression cycles', 'faster defect triage', 'fewer manual checks'][index]}</span><p>{item.org}</p></div>)}</div>
        </section>

        <section id="work" className="p-section" aria-labelledby="work-title">
          <div className="p-section-heading"><div><p className="p-eyebrow">01 / SELECTED WORK</p><h2 id="work-title">Complex systems.<br /><em>Concrete contributions.</em></h2></div><p>Enterprise engagements and personal builds. The context, the work I owned, and the outcomes behind it.</p></div>
          <div className="p-filter-row"><div className="p-filters" aria-label="Filter selected work">{categories.map((category) => <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}</div><span className="p-mono" role="status">{String(filtered.length).padStart(2, '0')} CASE STUDIES</span></div>
          <div className="p-project-grid">{filtered.map((item) => <button key={item.id} type="button" className={`p-project p-project-${item.id}`} onClick={() => setProject(item)} aria-label={`Read case study: ${item.title}`}>
            <div className="p-project-art"><span className="p-project-art-label">{projectMeta[item.id].lead}</span><ProjectDiagram id={item.id} /><span className="p-art-arrow" aria-hidden>↗</span></div>
            <div className="p-project-copy"><div className="p-project-meta"><span>{projectMeta[item.id].company}</span><span>{item.year}</span></div><h3>{projectMeta[item.id].title}</h3><p>{item.logline.replace('developed in this local project', 'built as a personal project')}</p><div className="p-project-stack">{item.stack.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div><span className="p-read-case">Explore case study <span aria-hidden>↗</span></span></div>
          </button>)}</div>
        </section>

        <QualityLab />

        <section id="expertise" className="p-section" aria-labelledby="expertise-title">
          <div className="p-section-heading"><div><p className="p-eyebrow">03 / HOW I CONNECT THE DOTS</p><h2 id="expertise-title">Across the stack.<br /><em>Accountable for quality.</em></h2></div><p>Hands-on implementation, evaluation strategy and the judgement to move a release forward.</p></div>
          <div className="p-expertise"><div className="p-expertise-list" aria-label="Explore expertise">{skillCategories.map((category, index) => <button type="button" key={category.id} aria-pressed={expertise === index} aria-controls="expertise-detail" onClick={() => setExpertise(index)}><span className="p-mono">0{index + 1}</span>{category.title}<span aria-hidden>↗</span></button>)}</div><div id="expertise-detail" className="p-expertise-detail"><p className="p-eyebrow">{skillCategories[expertise].subtitle}</p><h3>{skillCategories[expertise].title}</h3><div className="p-tech-tags">{skillCategories[expertise].skills.map((skill) => <span key={skill.name}>{skill.name}</span>)}</div><p className="p-label">IN PRACTICE</p><p>{[
            'At PostNL, my work spans faithfulness, agent routing, tool-call correctness and end-to-end quality. I combine deterministic checks, LLM-as-a-Judge and Human-in-the-Loop validation.',
            'At Canon Europe, I built Playwright automation across business-critical platforms. At Dolby, I standardised web and mobile automation with Playwright, Cypress and Appium.',
            'My enterprise work connects Salesforce, ERP, BI, CPQ and contract workflows. My AI quality work spans RAG, MCP tool calling and Salesforce Agentforce.',
            'TypeScript and Playwright underpin enterprise automation. Python powers my personal AI workspace; earlier engagements used Java, C# and Selenium for web and API testing.',
            'At Canon Europe, I owned Go/No-Go, cutover and rollback readiness. Across healthcare and compliance engagements, I integrated UI and API checks into delivery pipelines.',
            'My career covers healthcare IT, life sciences, payments and enterprise platforms, including clinical workflow validation and automated ITGC and Segregation of Duties checks.',
          ][expertise]}</p><a href="#work" className="p-text-link">See the work behind the skills ↗</a></div></div>
        </section>

        <section id="journey" className="p-section p-career-section" aria-labelledby="journey-title">
          <div className="p-section-heading"><div><p className="p-eyebrow">04 / EXPERIENCE & PERSPECTIVE</p><h2 id="journey-title">A career in quality.<br /><em>Built for what’s next.</em></h2></div><div className="p-career-summary"><p>{profile.intro}</p><a href={profile.resumePdf} download="Suresh_Parimi_Resume.pdf" className="p-text-link">Download the full résumé ↓</a></div></div>
          <div className="p-timeline">{experience.map((item, index) => <details key={item.company} open={index === 0 ? true : undefined}><summary><span className="p-mono p-career-period">{item.period}</span><span className="p-career-role"><strong>{item.company}</strong><span>{item.role}</span></span><span className="p-career-expand" aria-hidden>+</span></summary><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></details>)}</div>
          <div className="p-credentials"><span className="p-label">PROFESSIONAL QUALIFICATIONS</span>{certifications.map((item) => <span key={item.name}>{item.name}<small>{item.issuer}</small></span>)}</div>
        </section>

        <section id="contact" className="p-contact" aria-labelledby="contact-title"><p className="p-eyebrow">THE NEXT CHAPTER</p><h2 id="contact-title">Building something<br /><em>that needs to be trusted?</em></h2><div className="p-contact-bottom"><p>Let’s talk about AI quality, automation<br />and getting your next release right.</p><a href={`mailto:${profile.email}?subject=Let%E2%80%99s%20talk%20about%20quality`} className="p-button p-button-primary">Start a conversation ↗</a></div><div className="p-footer"><a href="#top" className="p-brand-mark" aria-label="Back to top">sp<span>.</span></a><span>© {new Date().getFullYear()} {profile.fullName} · {profile.location}</span><div><a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={`mailto:${profile.email}`}>Email ↗</a><a href={profile.resumePdf} download>Résumé ↓</a></div></div></section>
      </main>
      {project && <CaseStudy project={project} onClose={() => setProject(null)} />}
    </div>
  );
}

function Architecture() {
  return <div className="p-architecture" aria-label="Illustrative AI quality architecture: request, retrieval, agent orchestration, evaluation and release decision">
    <div className="p-architecture-top"><span className="p-mono">THE QUALITY LAYER</span><span className="p-architecture-index">FIG. 01</span></div>
    <div className="p-orbit p-orbit-one" aria-hidden /><div className="p-orbit p-orbit-two" aria-hidden />
    <div className="p-arch-node p-node-request"><span className="p-node-icon">↳</span><div><strong>Human intent</strong><span>Request + context</span></div></div>
    <div className="p-arch-line p-line-one" aria-hidden />
    <div className="p-arch-node p-node-context"><span className="p-node-icon">⌕</span><div><strong>Grounded context</strong><span>Retrieval + evidence</span></div></div>
    <div className="p-arch-line p-line-two" aria-hidden />
    <div className="p-arch-core"><span className="p-mono">AGENT ORCHESTRATION</span><strong>Intelligence<br /><em>with guardrails.</em></strong><div><span>RAG</span><span>MCP</span><span>HITL</span></div></div>
    <div className="p-arch-line p-line-three" aria-hidden />
    <div className="p-arch-node p-node-check"><span className="p-node-icon">✓</span><div><strong>Evaluation layer</strong><span>Faithfulness · tools · routing</span></div></div>
    <a href="#lab" className="p-arch-bottom"><span><span className="p-dot" /> EVIDENCE BEFORE RELEASE</span><span aria-hidden>↗</span></a>
  </div>;
}

function ProjectDiagram({ id }: { id: string }) {
  if (id === 'enterprise-automation') return <div className="p-mini-regression" aria-hidden><span>REGRESSION CYCLE</span><div><strong>12</strong><span>→</span><strong>3<small>days</small></strong></div><div className="p-regression-bars"><i /><i /><i /></div><span>75% shorter cycles / Canon Europe</span></div>;
  if (id === 'regulated-validation') return <div className="p-mini-shield" aria-hidden><svg viewBox="0 0 120 140"><path d="M60 8 108 26v44c0 30-25 50-48 62C37 120 12 100 12 70V26Z" fill="none" stroke="currentColor" strokeWidth="1" /><path d="m38 68 15 15 31-34" fill="none" stroke="currentColor" strokeWidth="3" /></svg><span>WORKFLOW → VALIDATION → EVIDENCE</span></div>;
  if (id === 'jarvis') return <div className="p-mini-terminal" aria-hidden><div><i /><i /><i /><span>jarvis / workspace</span></div><p><span>›</span> voice.input</p><p><span>›</span> route.provider</p><p><span>›</span> inspect.evidence<span className="p-terminal-cursor">▍</span></p><span>VISIBLE TRACES. INFORMED DECISIONS.</span></div>;
  return <div className="p-mini-agents" aria-hidden><div><span>RETRIEVE</span><span>ROUTE</span><span>ACT</span></div><i /><strong>Evaluate the whole journey.</strong><div><span>FAITHFULNESS</span><span>TOOL CORRECTNESS</span></div></div>;
}

function CaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const meta = projectMeta[project.id];
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const dialog = ref.current;
    const overflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';
    return () => { dialog?.close(); document.body.style.overflow = overflow; previous?.focus({ preventScroll: true }); };
  }, []);
  return <dialog ref={ref} className="p-case-dialog" aria-labelledby="case-title" onCancel={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}><article className="p-case-content"><button type="button" className="p-case-close" onClick={onClose} aria-label="Close case study" autoFocus>×</button><p className="p-eyebrow">{meta.company} / {project.year}</p><h2 id="case-title">{project.title}</h2><p className="p-case-lead">{project.logline.replace('developed in this local project', 'built as a personal project')}</p><div className="p-tech-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><section><h3>The context</h3><p>{meta.context}</p></section><section><h3>What I contributed</h3><ul>{project.build.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h3>Quality controls & capabilities</h3><ul>{project.features.map((item) => <li key={item}>{item}</li>)}</ul></section>{project.metrics.length > 0 && <section><h3>Documented outcomes</h3><div className="p-case-metrics">{project.metrics.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div></section>}<div className="p-case-next"><p>{project.id === 'ai-evaluation' ? 'Explore an illustrative implementation of deterministic AI quality checks.' : 'Want to discuss the architecture, tradeoffs or quality approach?'}</p><a className="p-button p-button-primary" href={project.id === 'ai-evaluation' ? '#lab' : `mailto:${profile.email}?subject=${encodeURIComponent(`Let's discuss ${project.title}`)}`} onClick={project.id === 'ai-evaluation' ? onClose : undefined}>{project.id === 'ai-evaluation' ? 'Explore the quality lab ↗' : 'Discuss this work ↗'}</a></div></article></dialog>;
}
