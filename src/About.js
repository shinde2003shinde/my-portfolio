// About.js
import React from "react";
import "./About.css";

function About() {
  return (
    <>
          <section className="about-section">
        <div className="container">
          <h2>👨‍💼 About Me</h2>

          <div className="about-card">
            <p>
              Hello! My name is <strong>Mayuri Shinde</strong> from{" "}
              <strong>Sambhajinagar</strong>. I have completed my{" "}
              <strong>Bachelor's degree in Bioinformatics</strong> from{" "}
              <strong>Dr.Babasaheb Ambedkar Marathwada University</strong>. I am currently pursuing a{" "}
              <strong>Java Full Stack Course</strong> at{" "}
              <strong>IT Vedant</strong> where I’m learning technologies like
              HTML, CSS, JavaScript, Core Java, SQL, and React.
            </p>

            <p>
              I come from a <strong>simple farming family</strong>. My{" "}
              <strong>father helped build my confidence</strong>, and my{" "}
              <strong>mother taught me to respect others</strong> and behave
              well socially. I am sincere, eager to learn, and passionate about
              technology and problem-solving.
            </p>

            <p>
              My goal is to become a skilled full-stack developer and contribute
              to impactful software projects.
            </p>
          </div>
        </div>
      </section>

      <footer>&copy; 2025 Mayuri Shinde. All rights reserved.</footer>
    </>
  );
}

export default About;
