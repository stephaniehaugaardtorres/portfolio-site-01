import "./App.css";

function App() {
  return (
    <main className="site-shell">
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

          </div>

          <div className="project-card">

            <h3>Job Application Tracker</h3>

            <p>
              A dashboard for tracking job applications with status filtering, localStorage persistence, and clean card-based UI.
            </p>

            <p className="tech-stack">
              React • JavaScript • Vite • LocalStorage
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;