import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Clock, Users, Utensils, Mail, Bell } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Digital Time Machine",
      description: "A Machine Learning project that transforms present-day images into historically accurate past renditions of the same locations, bridging time by recreating the visual essence of different historical eras.",
      icon: <Clock className="w-8 h-8" />,
      technologies: ["Machine Learning", "Computer Vision", "Python", "Image Processing"],
      features: [
        "Historical image transformation",
        "Visual essence recreation",
        "Interactive time travel experience",
        "Advanced ML algorithms"
      ],
      gradient: "from-tech-blue to-tech-teal"
    },
    {
      title: "Edu Ease",
      description: "Your Personalized Learning Companion - A web platform with speech recognition & text-to-speech for accessibility. Features personalized and gamified learning modules for enhanced engagement.",
      icon: <Users className="w-8 h-8" />,
      technologies: ["JavaScript", "HTML", "CSS", "Speech Recognition", "Text-to-Speech"],
      features: [
        "Speech recognition integration",
        "Text-to-speech functionality",
        "Personalized learning paths",
        "Gamified learning modules"
      ],
      gradient: "from-tech-purple to-tech-blue"
    },
    {
      title: "Foodwallah",
      description: "Food Ordering Web Application - A fully frontend-based food ordering web app built with HTML, CSS, and JavaScript. Designed to be responsive and interactive for an engaging user experience.",
      icon: <Utensils className="w-8 h-8" />,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX","React" ],
      features: [
        "Responsive web design",
        "Interactive user interface",
        "Real-world food ordering simulation",
        "Modern web technologies"
      ],
      gradient: "from-tech-teal to-tech-purple"
    },
  {
    title: "Gmail Auto-Responder",
    description:
      "An n8n automation workflow that automatically replies to incoming Gmail messages with customized templates. Helps save time by sending quick, contextual responses.",
    icon: <Mail className="w-8 h-8" />,
    technologies: ["n8n", "Gmail API", "JavaScript"],
    features: [
      "Automatic email replies",
      "Customizable response templates",
      "Trigger on new Gmail messages",
      "Seamless Gmail API integration"
    ],
    gradient: "from-tech-green to-tech-blue"
  },
  {
    title: "Slack Notification Bot",
    description:
      "An n8n workflow that sends instant Slack alerts for important triggers like new form submissions or database updates. Ensures teams never miss critical updates.",
    icon: <Bell className="w-8 h-8" />,
    technologies: ["n8n", "Slack API", "Webhooks"],
    features: [
      "Real-time Slack alerts",
      "Webhook-based triggers",
      "Customizable channel notifications",
      "Streamlined team communication"
    ],
    gradient: "from-tech-orange to-tech-pink"
  }
    
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that showcase my expertise in data science, machine learning, and web development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="card-gradient border-border/50 hover:border-primary/50 transition-smooth hover:scale-105 card-shadow group animate-scale-in h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} p-3 mb-4 group-hover:scale-110 transition-spring`}>
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Key Features
                  </p>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 transition-smooth"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="transition-smooth hover:bg-accent"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;
