import './App.css';

const projects = [
  {
    index: "01",
    title: "ShiftSignal",
    type: "Original healthcare product",
    description:
      "An interactive shift-handoff dashboard shaped by frontline care experience—prioritizing observation levels, safety-critical changes, open tasks, and accountable completion.",
    stack: ["React", "TypeScript", "Workflow UX", "Responsive UI"],
    href: "https://shift-signal-dashboard.thiongopaul4995.chatgpt.site",
    destination: "live project",
  },
  {
    index: "02",
    title: "Pizza Restaurant API",
    type: "Backend engineering",
    description:
      "A Flask REST API with relational data modeling, request validation, serialization, cascade deletion, and structured error responses.",
    stack: ["Python", "Flask", "SQLAlchemy", "REST"],
    href: "https://github.com/paul23-4/Phase-4-PizzasCodeChallenge",
    destination: "GitHub",
  },
  {
    index: "03",
    title: "Bot Battlr",
    type: "Frontend engineering",
    description:
      "A React interface for browsing a remote dataset, inspecting individual records, and managing a user-selected collection through reusable components.",
    stack: ["React", "JavaScript", "REST API", "CSS"],
    href: "https://github.com/paul23-4/Bot-battlr5",
    destination: "GitHub",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Paul Thiong'o, home">
          PT<span className="signal-dot" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="mailto:thiongopaul3995@gmail.com">
            Start a conversation <ArrowIcon />
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-light" /> Kent, Washington · Open to projects
          </p>
          <h1>
            I build software with
            <span>human stakes in mind.</span>
          </h1>
          <p className="hero-intro">
            I’m Paul Thiong’o—a full-stack developer and healthcare professional
            who brings calm problem-solving, clear communication, and frontline
            perspective to every product.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">
              Explore selected work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="text-link"
              href="https://github.com/paul23-4"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile <ArrowIcon />
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Developer profile summary">
          <div className="panel-topline">
            <span>paul.profile</span>
            <span className="panel-status">● ready</span>
          </div>
          <div className="code-profile">
            <p>
              <span className="code-key">role</span>
              <span className="code-value">Full-stack developer</span>
            </p>
            <p>
              <span className="code-key">edge</span>
              <span className="code-value">7+ years in healthcare</span>
            </p>
            <p>
              <span className="code-key">training</span>
              <span className="code-value">Moringa × Flatiron</span>
            </p>
            <p>
              <span className="code-key">focus</span>
              <span className="code-value">Useful, reliable products</span>
            </p>
          </div>
          <div className="panel-note">
            <span>CARE</span>
            <span className="panel-divider" />
            <span>CODE</span>
          </div>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Professional highlights">
        <div>
          <strong>70</strong>
          <span>GitHub repositories</span>
        </div>
        <div>
          <strong>2024</strong>
          <span>Software engineering certificate</span>
        </div>
        <div>
          <strong>2</strong>
          <span>Perspectives: care + code</span>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected engineering work</p>
            <h2>Domain insight, turned into software.</h2>
          </div>
          <p>
            Original healthcare product thinking backed by frontend state, REST
            APIs, validation, and relational data models.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-index">{project.index}</div>
              <div className="project-main">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="stack-list" aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <a
                className="project-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} ${project.destination}`}
              >
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities-section" aria-labelledby="capabilities-title">
        <div className="capabilities-intro">
          <p className="eyebrow">Capabilities</p>
          <h2 id="capabilities-title">A practical full-stack foundation.</h2>
          <p>
            I work across the interface, API, and data layers—with an emphasis
            on code that is understandable, testable, and useful to the person
            on the other side of the screen.
          </p>
        </div>
        <div className="capability-grid">
          <article>
            <span>01 / Interface</span>
            <h3>Frontend</h3>
            <p>
              Responsive interfaces, reusable components, client-side state,
              forms, navigation, and data-driven views.
            </p>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML + CSS</li>
              <li>Vite</li>
            </ul>
          </article>
          <article>
            <span>02 / Systems</span>
            <h3>Backend</h3>
            <p>
              RESTful endpoints, relational models, validation, serialization,
              persistence, and predictable error handling.
            </p>
            <ul>
              <li>Python</li>
              <li>Flask</li>
              <li>SQLAlchemy</li>
              <li>SQLite</li>
            </ul>
          </article>
          <article>
            <span>03 / Delivery</span>
            <h3>Problem solving</h3>
            <p>
              Requirements breakdown, clear documentation, Git workflows,
              debugging, and steady decision-making under pressure.
            </p>
            <ul>
              <li>Git + GitHub</li>
              <li>API testing</li>
              <li>Documentation</li>
              <li>Teamwork</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-statement">
          <p className="eyebrow">The perspective behind the code</p>
          <h2>
            Frontline care taught me what reliable systems are really for.
          </h2>
        </div>
        <div className="about-details">
          <p className="about-lead">
            Before writing software, I spent years supporting people in
            healthcare and behavioral-health environments. That work trained me
            to notice small details, communicate clearly, document accurately,
            and stay composed when the stakes rise.
          </p>
          <p>
            I now bring that discipline into software development. My goal is
            simple: build products that reduce friction, earn trust, and help
            people do important work with confidence.
          </p>
          <div className="credentials">
            <div>
              <span>2024</span>
              <strong>Software Engineering Certificate</strong>
              <p>Moringa School / Flatiron</p>
            </div>
            <div>
              <span>7+ years</span>
              <strong>Healthcare experience</strong>
              <p>Patient care, behavioral health, and team-based support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="principles-section" aria-labelledby="principles-title">
        <div className="principles-label">
          <p className="eyebrow">How I work</p>
          <h2 id="principles-title">Calm. Clear. Accountable.</h2>
        </div>
        <ol className="principles-list">
          <li>
            <span>01</span>
            <div>
              <h3>Understand before building</h3>
              <p>I clarify the real need, the user, and the constraints first.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Make the complex readable</h3>
              <p>I favor clear structure, direct communication, and maintainable code.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Own the outcome</h3>
              <p>I stay with problems, learn quickly, and close the loop.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Have a useful problem to solve?</p>
        <h2>Let’s build something that matters.</h2>
        <div className="contact-actions">
          <a className="contact-email" href="mailto:thiongopaul3995@gmail.com">
            thiongopaul3995@gmail.com <ArrowIcon />
          </a>
          <a
            className="contact-github"
            href="https://github.com/paul23-4"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub <ArrowIcon />
          </a>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top" aria-label="Back to top">
          PT<span className="signal-dot" />
        </a>
        <p>Full-stack developer · Kent, Washington</p>
        <p>© 2026 Paul Thiong’o</p>
      </footer>
    </main>
  );
}

export default App;
