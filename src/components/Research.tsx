import { Activity, ExternalLink } from "lucide-react";
import "./Research.css";

const Research = () => {
    const researchItems = [
        {
            id: "01",
            title: "Multimodal Knowledge Fusion for Arecanut Quality Assessment",
            status: "Manuscript In Preparation",
            description: "Developing a multimodal CNN for arecanut quality assessment integrating RGB and X-ray imagery through structured fusion strategies, achieving 99.70% accuracy under controlled conditions.",
            icon: <Activity size={20} />,
            technologies: ["Python", "PyTorch", "TensorFlow", "CNN", "Machine Learning", "Computer Vision"],
            linkUrl: "/Shivasubrahmanya_K_C_Resume.pdf",
            features: [
                "Integrating RGB and X-ray imagery",
                "Structured feature fusion strategies",
                "Standardized preprocessing and evaluation"
            ]
        }
    ];

    return (
        <section id="research" className="research-section">
            <div className="research-wrapper">
                <div className="research-header">
                    <div className="research-title-group">
                        <span className="research-index">Index_04</span>
                        <h2 className="research-heading">System_Research</h2>
                    </div>
                    <span className="research-count">
                        TOTAL_ENTRIES: {researchItems.length}
                    </span>
                </div>

                <div className="research-list">
                    {researchItems.map((item, index) => (
                        <div
                            key={item.title}
                            className="research-item"
                        >
                            <div className="research-grid">
                                {/* ID & Icon */}
                                <div className="research-meta">
                                    <span className="research-id">#{String(index + 1).padStart(2, '0')}</span>
                                    <div className="research-icon-wrapper">
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="research-content">
                                    <h3 className="research-title">
                                        {item.title}
                                    </h3>
                                    <div className="research-status-badge">
                                        STATUS: {item.status}
                                    </div>
                                    <p className="research-description">
                                        {item.description}
                                    </p>
                                    <ul className="research-features">
                                        {item.features.map((feature, i) => (
                                            <li key={i}>
                                                <span className="feature-bullet" /> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="research-technologies">
                                        {item.technologies.map((tech) => (
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
                                <div className="research-actions">
                                    <a
                                        href={item.linkUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary research-btn"
                                    >
                                        <ExternalLink size={12} />
                                        View_Abstract
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
