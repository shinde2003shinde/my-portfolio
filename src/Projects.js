// Projects.js
import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <>
      <section className="project-section">
        <div className="container">
          <h2>📁 My Projects</h2>

          <div className="project-card">
            <h3>
              <a
                className="project-link"
                href="https://github.com/shinde2003shinde?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
               Terpenoid-Based Antiviral Evaluation on Ebola Virus (In Silico)
              </a>
            </h3>
            <p>
              Conducted a computational study on Ebola Virus Disease (EVD), focusing on the spike glycoprotein (GP), which plays a crucial role in viral attachment and host cell entry.
 Evaluated six terpenoids — caryophyllene, humulene, menthol, farnesol, geraniol, and thujone — against the Ebola virus glycoprotein (PDB ID: 8B10) using molecular docking. Farnesol and caryophyllene demonstrated the highest binding
 affinity, indicating strong antiviral potential. Performed in silico molecular docking analysis of six terpenoids (caryophyllene, humulene, menthol, farnesol, geraniol, and
 thujone) targeting the Ebola virus spike glycoprotein (PDB ID: 8B10) to evaluate antiviral potential


            </p>
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">MySQL</span>
          </div>
           <div className="project-card">
            <h3>
              <a
                className="project-link"
                href="https"
                target="_blank"
                rel="noopener noreferrer"
              >
                Antimicrobial activity in spices 
              </a>
            </h3>
            <p>
              Conducted a study on the antimicrobial effects of natural spices including clove, black pepper, cinnamon, bay leaf, coriander, and cumin against food spoilage bacteria (Bacillus subtilis) and
 pathogens (Staphylococcus aureus). Demonstrated that these spices possess natural antimicrobial properties, supporting their application in food preservation and
 medical use as alternatives to synthetic antibiotics. Investigated the antimicrobial properties of culinary spices such as clove, black pepper, cinnamon, bay leaf, coriander, and cumin
 against food spoilage bacteria (e.g., Bacillus subtilis) and pathogenic microorganisms (e.g., Staphylococcus aureus)
            </p>
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">MySQL</span>
            <span className="tag">JDBC</span>
          </div>
        </div>
      
      </section>

      <footer>
        &copy; 2025 Mayuri shinde. All rights reserved.
      </footer>
    </>
  );
}

export default Projects;
