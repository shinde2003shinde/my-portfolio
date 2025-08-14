import React, { useState } from "react";
import "./Skills.css";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const showSkill = (name, level) => {
    setSelectedSkill({ name, level });
  };

  return (
    <div>
      <section className="content">
        <div className="container">
          <h2>💻 My Skills</h2>

          <div className="skills-grid">
            <div className="skill-card" onClick={() => showSkill("HTML", "90%")}>HTML</div>
            <div className="skill-card" onClick={() => showSkill("CSS", "85%")}>CSS</div>
            <div className="skill-card" onClick={() => showSkill("JavaScript", "75%")}>JavaScript</div>
            <div className="skill-card" onClick={() => showSkill("React.js", "70%")}>React.js</div>
            <div className="skill-card" onClick={() => showSkill("SQL", "60%")}>SQL</div>
            <div className="skill-card" onClick={() => showSkill("Java", "0%")}>Java</div>
            <div className="skill-card" onClick={() => showSkill("Spring boot", "0%")}>Spring boot</div>
            <div className="skill-card" onClick={() => showSkill("MangoDB", "00%")}>MangoDB</div>
            <div className="skill-card" onClick={() => showSkill("Angular", "0%")}>Angular</div>
            <div className="skill-card" onClick={() => showSkill("Core Java", "0%")}>Core Java</div>
            <div className="skill-card" onClick={() => showSkill("Communication", "50%")}>Communication</div>
            <div className="skill-card" onClick={() => showSkill("Teamwork", "85%")}>Teamwork</div>
          </div>

          {selectedSkill && (
            <div className="skill-output">
              <h3>{selectedSkill.name}</h3>
              <p>Proficiency: <strong>{selectedSkill.level}</strong></p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Skills;
