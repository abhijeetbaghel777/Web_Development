import React from 'react'

const About = () => {
  return (
    <div className="page">

      <div className="hero aboutHero">
        <h1>About This System</h1>
        <p>Built for scalable task tracking and UI experimentation.</p>
      </div>

      <div className="aboutGrid">

        <div className="infoBox">
          <h2>🚀 Purpose</h2>
          <p>
            This project demonstrates how a React frontend can be structured
            into reusable components and scalable UI sections.
          </p>
        </div>

        <div className="infoBox">
          <h2>📌 Features</h2>
          <ul>
            <li>React Router navigation</li>
            <li>Dashboard-style UI</li>
            <li>Reusable card system</li>
            <li>Task tracking layout</li>
          </ul>
        </div>

        <div className="infoBox">
          <h2>⚙️ System Info</h2>
          <ul>
            <li>Version: 1.0.0</li>
            <li>Mode: Development UI</li>
            <li>State: Static (no backend yet)</li>
          </ul>
        </div>

      </div>

      <div className="timeline">
        <h2>Project Flow</h2>

        <div className="timelineItem">1. UI Setup</div>
        <div className="timelineItem">2. Routing Setup</div>
        <div className="timelineItem">3. Component Design</div>
        <div className="timelineItem">4. Task System (next)</div>
      </div>

    </div>
  )
}

export default About