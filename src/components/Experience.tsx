import { Briefcase, Calendar, Users, Lightbulb } from "lucide-react";
import "./Experience.css";

const Experience = () => {
  const experience = {
    title: "Mentor",
    company: "Summer Internship, Hack/Harbour 3.0",
    period: "Summer 2024",
    type: "Internship",
    description: "Mentored participants during a 10-day intensive bootcamp, delivering sessions and guiding project development. Supported collaborative learning and exploration of emerging technologies.",
    responsibilities: [
      "Mentored participants during intensive 10-day program",
      "Delivered technical sessions on emerging technologies",
      "Guided project development and implementation",
      "Supported collaborative learning environment",
      "Facilitated knowledge sharing and skill development"
    ],
    skills: ["Mentoring", "Technical Training", "Project Management", "Team Leadership", "Knowledge Transfer"]
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-bg-gradient"></div>

      <div className="experience-container">
        <div className="experience-header">
          <h2 className="experience-title">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="experience-subtitle">
            Building expertise through hands-on experience and mentoring others in the tech community
          </p>
        </div>

        <div className="experience-card-wrapper">
          <div className="experience-card">
            <div className="experience-head-content">
              <div className="experience-info">
                <div className="experience-role-title">
                  <div className="experience-icon-box">
                    <Briefcase size={24} />
                  </div>
                  {experience.title}
                </div>
                <p className="experience-company">
                  {experience.company}
                </p>
                <p className="experience-desc">
                  {experience.description}
                </p>
              </div>
              <div className="experience-meta">
                <span className="meta-badge badge-secondary">
                  <Calendar size={12} style={{ marginRight: '4px' }} />
                  {experience.period}
                </span>
                <span className="meta-badge badge-outline">
                  {experience.type}
                </span>
              </div>
            </div>

            <div className="exp-content-group">
              {/* Key Responsibilities */}
              <div className="space-y-3">
                <div className="section-label">
                  <Users className="w-5 h-5 text-primary" />
                  <p className="label-text">
                    Key Responsibilities
                  </p>
                </div>
                <ul className="responsibilities-list">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="responsibility-item">
                      <div className="list-dot"></div>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Developed */}
              <div className="space-y-3">
                <div className="section-label">
                  <Lightbulb className="w-5 h-5 text-accent" />
                  <p className="label-text">
                    Skills Developed
                  </p>
                </div>
                <div className="skills-wrapper-exp">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;