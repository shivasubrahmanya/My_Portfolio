import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profilePhoto from "../../images/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-tech-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient">Shivasubrahmanya</span>
                <br />
                <span className="text-foreground">K C</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Data Science & Machine Learning Engineer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Passionate about transforming data into actionable insights. Skilled in AI, statistical modeling, 
                and creating innovative solutions that drive real-world impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="hero-gradient text-white font-semibold transition-spring hover:scale-105 glow-shadow">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="transition-spring hover:scale-105">
                Download Resume
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://github.com/shivasubrahmanya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent transition-smooth hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shivasubrahmanya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent transition-smooth hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:shivasubrahmanya8@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-accent transition-smooth hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 hero-gradient rounded-full blur-2xl opacity-30 animate-glow"></div>
              <img 
                src={profilePhoto} 
                alt="Shivasubrahmanya K C" 
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/20 transition-spring hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;