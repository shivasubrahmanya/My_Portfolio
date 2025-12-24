import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      id: "SYS_01",
      title: "Data Science & Analysis",
      skills: ["Numpy", "Pandas", "Scikit-Learn", "Matplotlib"]
    },
    {
      id: "SYS_02",
      title: "AI & Machine Learning",
      skills: ["Deep Learning", "Neural Networks", "TensorFlow", "PyTorch"]
    },
    {
      id: "SYS_03",
      title: "Core Engineering",
      skills: ["Python", "SQL", "JavaScript", "HTML/CSS", "R", "Java", "C/C++"]
    },
    {
      id: "SYS_04",
      title: "Tools & Infrastructure",
      skills: ["Microsoft Power BI", "Git", "Jupyter", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-wrapper">
        <div className="skills-header">
          <div className="skills-title-group">
            <span className="skills-index">Index_02</span>
            <h2 className="skills-heading">Technical_Specifications</h2>
          </div>
          <p className="skills-description">
            // COMPREHENSIVE TOOLKIT FOR DATA TRANSFORMATION AND INTELLIGENT SOLUTIONS
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category">
              <div className="skill-category-header">
                <h3 className="skill-category-title">{category.title}</h3>
                <span className="skill-category-id">{category.id}</span>
              </div>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    <div className="skill-dot" />
                    <span className="skill-name">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
