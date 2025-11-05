import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © 2025 Takudzwa Kanokanga. All rights reserved.
          </p>
          
          <p className="flex items-center gap-2 text-muted-foreground">
            Built using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
