import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "DreamDay Wedding Planner",
      description:
        "Developed a responsive wedding planner web app. Implemented dynamic budget tracking, guest list management, and interactive planning tools.",
      tags: ["React.js", "Tailwind CSS", "Responsive Design"],
      liveUrl: "https://dream-day-wedding-planner-app.vercel.app/",
      githubUrl: "https://github.com/Takudzwa-Kanokanga/DreamDay-wedding-planner-app.git",
      image: "https://res.cloudinary.com/djfxfz6jl/image/upload/v1762422786/dream-day-wedding-planner-app-vercel-app-1024x768desktop-d5c9ea_adoy0o.jpg",
    },
        {
      title: "Explore Zimbabwe",
      description:
        "Explore Zimbabwe is a travel companion app designed to make discovering Zimbabwe easier, smarter, and more enjoyable for tourists.",
      tags: ["Explore Zimbabwe", "Tourism App", "Travel Guide", "African Tourism"],
      liveUrl: "https://explorezimbabwe.vercel.app/",
      githubUrl: "https://github.com/Takudzwa-Kanokanga/zimbabwe-explorer.git",
      image: "https://res.cloudinary.com/djfxfz6jl/image/upload/v1763658574/Screenshot_458_e4dpyu.png",
    },
    {
      title: "LocalPro - Zimbabwe's Local Skills Marketplace",
      description:
        "LocalPro connects you with trusted service providers near you. The app makes it easy to find, compare, and hire skilled professionals for any job.",
      tags: ["Figma to Code", "Marketplace App", "Community App", "Local Services"],
      liveUrl: "https://zimbaskill-connect.vercel.app/",
      githubUrl: "https://github.com/Takudzwa-Kanokanga/LocalPro---Zimbabwe-s-Local-Skills-Marketplace.git",
      image: "https://res.cloudinary.com/djfxfz6jl/image/upload/v1762423102/zimbaskill-connect-vercel-app-1024x768desktop-e21c28_uruanh.jpg",
    },
    {
      title: "TaskFlow",
      description:
        "TaskFlow is a sleek and intuitive to-do app built with TypeScript, React.js, and Tailwind CSS. It helps you stay organized by managing tasks efficiently, setting priorities, and tracking progress.",
      tags: ["To Do App", "Productivity App", "ProjectShowcase", "UI/UX Design"],
      liveUrl: "https://blue-aura-tasks.vercel.app/",
      githubUrl: "https://github.com/Takudzwa-Kanokanga/blue-aura-tasks.git",
      image: "https://res.cloudinary.com/djfxfz6jl/image/upload/v1762423262/blue-aura-tasks-vercel-app-1024x768desktop-5d75d6_yofgr1.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-primary bg-clip-text text-white">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-large transition-smooth border group animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-45 transition-smooth" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-smooth" />
                      GitHub
                    </a>
                  </Button>
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
