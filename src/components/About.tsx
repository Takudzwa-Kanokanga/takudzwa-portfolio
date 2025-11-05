import { Code2, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and efficient code",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning ideas into functional solutions",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Continuously growing and adapting",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-primary bg-clip-text text-white">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a passionate software developer with strong experience in{" "}
              <span className="text-primary font-semibold">frontend and backend development</span>. 
              I enjoy transforming ideas and designs into clean, functional, and responsive 
              interfaces that deliver great user experiences.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              My skills include{" "}
              <span className="font-semibold text-foreground">
                React.js, JavaScript, HTML, CSS, and Python
              </span>
              . I have hands-on experience translating Figma and custom designs into 
              working websites, and I'm continuously learning to sharpen my craft.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              My goal is to contribute to impactful projects where I can grow while 
              building software that solves real-world problems.
            </p>
          </div>

          <div className="grid gap-6 animate-in fade-in slide-in-from-right duration-700">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth border group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg gradient-primary">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
