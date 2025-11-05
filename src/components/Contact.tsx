import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:kanokangatakudzwa@gmail.com",
      label: "kanokangatakudzwa.gmail.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourprofile",
      label: "Takudzwa Kanokanga",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/@Takudzwa88",
      label: "Takudzwa88",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-primary bg-clip-text text-white">Touch</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to exciting opportunities, collaborations, and conversations
            about software development. If you'd like to connect, feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full gradient-primary text-white hover:opacity-90 transition-smooth shadow-medium group"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-700">
            <div className="bg-card p-8 rounded-xl shadow-soft border">
              <h3 className="text-2xl font-bold mb-6">Direct Contact</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary transition-smooth group"
                  >
                    <div className="p-3 rounded-lg gradient-primary">
                      <link.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-smooth">
                        {link.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl border border-primary/20">
              <h3 className="text-xl font-bold mb-3">Let's Build Something Together</h3>
              <p className="text-muted-foreground">
                Whether it's a new project, a collaboration, or just a chat about tech,
                I'm always excited to connect with fellow developers and potential employers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
