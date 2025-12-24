import { ExternalLink, Github, Clock, Users, Utensils, Mail, Bell } from "lucide-react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Digital Time Machine",
      description: "A Machine Learning project that transforms present-day images into historically accurate past renditions of the same locations, bridging time by recreating the visual essence of different historical eras.",
      icon: <Clock size={20} />,
      technologies: ["Machine Learning", "Computer Vision", "Python", "Image Processing"],
      features: [
        "Historical image transformation",
        "Visual essence recreation",
        "Interactive time travel experience",
        "Advanced ML algorithms"
      ],
    },
    {
      id: "02",
      title: "Edu Ease",
      description: "Your Personalized Learning Companion - A web platform with speech recognition & text-to-speech for accessibility. Features personalized and gamified learning modules for enhanced engagement.",
      icon: <Users size={20} />,
      technologies: ["JavaScript", "HTML", "CSS", "Speech Recognition", "Text-to-Speech"],
      features: [
        "Speech recognition integration",
        "Text-to-speech functionality",
        "Personalized learning paths",
        "Gamified learning modules"
      ],
    },
    {
      id: "03",
      title: "Foodwallah",
      description: "Food Ordering Web Application - A fully frontend-based food ordering web app built with HTML, CSS, and JavaScript. Designed to be responsive and interactive for an engaging user experience.",
      icon: <Utensils size={20} />,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX", "React"],
      features: [
        "Responsive web design",
        "Interactive user interface",
        "Real-world food ordering simulation",
        "Modern web technologies"
      ],
    },
    {
      id: "04",
      title: "Gmail Auto-Responder",
      description:
        "An n8n automation workflow that automatically replies to incoming Gmail messages with customized templates. Helps save time by sending quick, contextual responses.",
      icon: <Mail size={20} />,
      technologies: ["n8n", "Gmail API", "JavaScript"],
      features: [
        "Automatic email replies",
        "Customizable response templates",
        "Trigger on new Gmail messages",
        "Seamless Gmail API integration"
      ],
    },
    {
      id: "05",
      title: "Slack Notification Bot",
      description:
        "An n8n workflow that sends instant Slack alerts for important triggers like new form submissions or database updates. Ensures teams never miss critical updates.",
      icon: <Bell size={20} />,
      technologies: ["n8n", "Slack API", "Webhooks"],
      features: [
        "Real-time Slack alerts",
        "Webhook-based triggers",
        "Customizable channel notifications",
        "Streamlined team communication"
      ],
    }

  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-wrapper">
        <div className="projects-header">
          <div className="projects-title-group">
            <span className="projects-index">Index_03</span>
            <h2 className="projects-heading">System_Projects</h2>
          </div>
          <span className="projects-count">
            TOTAL_ENTRIES: {projects.length}
          </span>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-item"
            >
              <div className="project-grid">
                {/* ID & Icon */}
                <div className="project-meta">
                  <span className="project-id">#{project.id}</span>
                  <div className="project-icon-wrapper">
                    {project.icon}
                  </div>
                </div>

                {/* Main Content */}
                <div className="project-content">
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="project-actions">
                  <button className="btn btn-primary project-btn">
                    <ExternalLink size={12} />
                    View_Demo
                  </button>
                  <button className="btn btn-ghost project-btn">
                    <Github size={12} />
                    Source_Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
