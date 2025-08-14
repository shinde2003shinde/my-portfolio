import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* ✅ Corrected Image Path */}
        <img
          src={`${process.env.PUBLIC_URL}/mayuri.png`}
          alt="Mayuri"
          className="profile-img"
        />

        <div className="intro-text">
          <h2>Hello, I'm Mayuri Shinde</h2>
          <p>
            I'm from <strong>Sambhajinagar</strong>. I completed my <strong>Bachelor’s in Science</strong> from
            <strong> Dr.Babasaheb Ambedkar Marathwada  University</strong>. I'm currently pursuing a <strong>Java Full Stack Course</strong> at
            <strong> IT Vedant</strong>, learning <strong>HTML, CSS, JavaScript, and React</strong>.
          </p>
          <p>
            I come from a <strong>simple family</strong>. My <strong>parents are farmers</strong>—my father helped me
            build confidence, and my mother taught me to respect others and have good social behavior.
          </p>

          {/* ✅ Corrected Resume Download Path */}
          <a
            href={`${process.env.PUBLIC_URL}/mayuri resume.pdf`}
            download="mayuri Resume.pdf"
            className="btn"
          >
            
          </a>

          {/* ✅ LinkedIn Button */}
          <a
            href="www.linkedin.com/in/mayuri-shinde-bb2854293"
            target="_blank"
            rel="noopener noreferrer"
            className="btn linkedin"
          >
            🔗 Visit LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
