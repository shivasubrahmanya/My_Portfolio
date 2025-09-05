import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering - CSE (AIML)",
      institution: "Sahyadri College of Engineering and Management",
      location: "Adyar, Mangaluru",
      period: "2023 - 2027",
      status: "Currently in 3rd year",
      gpa: "9.6 GPA",
      description: "Specializing in Artificial Intelligence and Machine Learning with a focus on practical applications and real-world problem solving."
    },
    {
      degree: "Pre University Course (PCMB)",
      institution: "Vivekananda Pre University Centre",
      location: "Puttur",
      period: "2021 - 2023",
      status: "Completed",
      gpa: "94.5%",
      description: "Strong foundation in Physics, Chemistry, Mathematics, and Biology, providing essential analytical and problem-solving skills."
    }
  ];

  const memberships = [
    "IEEE - Active Member",
    "AI/ML Community Contributor",
    "Open Source Enthusiast"
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-tech-purple/5 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Education & Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic excellence combined with continuous learning and professional development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={edu.degree} 
                className="card-gradient border-border/50 hover:border-primary/50 transition-smooth hover:scale-[1.02] card-shadow group animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl group-hover:text-primary transition-smooth flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        {edu.degree}
                      </CardTitle>
                      <p className="text-lg font-semibold text-muted-foreground">
                        {edu.institution}
                      </p>
                      <p className="text-muted-foreground">
                        {edu.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.period}
                      </Badge>
                      <div className="flex flex-col gap-1">
                        <Badge variant="outline" className="border-green-500/50 text-green-400">
                          <Award className="w-3 h-3 mr-1" />
                          {edu.gpa}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Memberships & Affiliations */}
          <Card className="card-gradient border-border/50 card-shadow animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Award className="w-6 h-6" />
                </div>
                Memberships & Affiliations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {memberships.map((membership) => (
                  <Badge 
                    key={membership} 
                    variant="secondary" 
                    className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-smooth text-sm py-2 px-4"
                  >
                    {membership}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;