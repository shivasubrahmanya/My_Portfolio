import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Brain, BarChart3 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Numpy", "Pandas", "Scikit-Learn","Matplotlib" ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Deep Learning", "Neural Networks", "TensorFlow",]
    },
    {
      title: "Programming",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Python", "SQL", "JavaScript", "HTML/CSS", "R", "Java", "C/C++"]
    },
    {
      title: "Tools & Technologies",
      icon: <Database className="w-6 h-6" />,
      skills: ["Microsoft Power BI","Git","Jupyter","GitHub"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-tech-purple/5 to-tech-blue/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for transforming data into intelligent solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="card-gradient border-border/50 hover:border-primary/50 transition-smooth hover:scale-105 card-shadow group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl group-hover:text-primary transition-smooth">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;