import "./App.css";

function App() {
  return (
    <main className="site-shell">

      <nav className="navbar">
        <h2 className="logo">Stephanie Haugaard</h2>

        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">Frontend Developer Portfolio</p>
        <h1>Nicole Stephanie Haugaard Torres</h1>
        <p className="hero-copy">
          Frontend developer with a visual storytelling background, building clean, polished web apps with React, JavaScript, and thoughtful UI design. 
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-btn">View Projects</a>
          <a href="#contact" className="secondary-btn">Contact Me</a>
        </div>
      </section>

      <section id="projects" className="projects-section">

        <h2>Featured Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>GPS Workforce Time Tracker</h3>

            <p>
              A React application for tracking employee clock-in and clock-out times using GPS validation, break enforcement, and payroll estimation.
            </p>

            <p className="tech-stack">
              React • JavaScript • CSS • Geolocation API
            </p>

            <div className="project-links">
              <a
              href="https://github.com/stephaniehaugaardtorres/clock-payroll"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
              >
                View Code
              </a>
            </div>
          </div>

          <div className="project-card">

            <h3>Job Application Tracker</h3>

            <p>
              A dashboard for tracking job applications with status filtering, localStorage persistence, and clean card-based UI.
            </p>

            <p className="tech-stack">
              React • JavaScript • Vite • LocalStorage
            </p>

            <div className="project-links">
              <a
                href="https://github.com/stephaniehaugaardtorres/job-application-tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
                >
                  View Code
                </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Me</h2>

        <p className="about-copy">
          I am a frontend developer with a background in visual storytelling and film, transitioning into web development to build polished, user-focused digital experiences. I enjoy combining clean code with strong visual presentation, and I am especially interested in creating interfaces that feel both professional and engaging.
        </p>

        <p className="about-copy">
          My recent work includes building a GPS workforce time tracker and a job application tracker using React, JavaScript, and localStorage. I bring both a creative eye and a practical problem-solving mindset to every project.
        </p>
      </section>

      <section id="skills" className="skills-section">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">React</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">Git</div>
          <div className="skill-card">GitHub</div>
          <div className="skill-card">Vite</div>
          <div className="skill-card">Responsive Design</div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact</h2>

        <p className="contact-copy">
          I'm currently seeking frontend developer opportunities.
          Feel free to reach out or view my work below.
        </p>
        
        <div className="contact-links">
          <a
            href="https://github.com/stephaniehaugaardtorres"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
            >
              Github
            </a>

            <a
            href="mailto:stephaniehaugaard@gmail.com"
            className="contact-btn secondary-contact"
            >
              Email Me 
            </a>
        </div>
      </section>
    </main>
  );
}

export default App;