import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, Users, Lightbulb } from "lucide-react";

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
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-tech-teal/5 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on experience and mentoring others in the tech community
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient border-border/50 hover:border-primary/50 transition-smooth card-shadow group animate-scale-in">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-2xl group-hover:text-primary transition-smooth flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-xl bg-tech-teal/10 text-tech-teal group-hover:bg-tech-teal group-hover:text-white transition-smooth">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    {experience.title}
                  </CardTitle>
                  <p className="text-lg font-semibold text-muted-foreground mb-1">
                    {experience.company}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="mb-2 bg-tech-teal/10 text-tech-teal">
                    <Calendar className="w-3 h-3 mr-1" />
                    {experience.period}
                  </Badge>
                  <Badge variant="outline" className="block text-xs">
                    {experience.type}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Key Responsibilities */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Key Responsibilities
                  </p>
                </div>
                <ul className="space-y-2 ml-7">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="text-muted-foreground flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Developed */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-accent" />
                  <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Skills Developed
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 ml-7">
                  {experience.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;