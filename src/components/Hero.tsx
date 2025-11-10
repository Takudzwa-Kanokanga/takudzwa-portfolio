import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
             Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="gradient-primary bg-clip-text text-white">
              Takudzwa
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
            A Software Developer experienced in both Frontend and Backend Development
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I build clean, responsive, and user-friendly web and mobile applications using React.js,
            JavaScript, HTML, CSS, Node.js and Python.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="gradient-primary text-white hover:opacity-90 transition-smooth shadow-medium group min-w-[200px]"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 min-w-[200px] hover:bg-secondary"
            >
              <Download className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
