import { Code, Layers, Palette, Database, Wrench, Zap } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Code,
      items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Styling",
      icon: Palette,
      items: ["Tailwind CSS", "Flexbox", "Grid", "Responsive Design"],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Backend/Other",
      icon: Database,
      items: ["Node.js", "Python", "Git & GitHub"],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Tools",
      icon: Wrench,
      items: ["VS Code", "Figma to Code", "Chrome DevTools"],
      color: "from-orange-500 to-red-500",
    },
    {
      category: "Core Strengths",
      icon: Zap,
      items: ["UI/UX Implementation", "Clean Code", "Debugging"],
      color: "from-yellow-500 to-amber-500",
    },
    {
      category: "Frameworks",
      icon: Layers,
      items: ["Vite", "Component Libraries", "Modern Build Tools"],
      color: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-primary bg-clip-text text-white">Expertise</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, responsive web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-large transition-smooth border group animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color}`}>
                  <skill.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-smooth">
                  {skill.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-smooth"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
