import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const Footer = () => (
  <footer className="border-t border-border/30 py-8 mt-20">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="font-display font-bold gradient-text text-sm">AY</span>
        <span className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {portfolioData.profile.name}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <a href={portfolioData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
          <Linkedin size={14} />
        </a>
        <a href={portfolioData.profile.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
          <Github size={14} />
        </a>
        <a href={portfolioData.profile.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
          <Instagram size={14} />
        </a>
        <a href={`mailto:${portfolioData.profile.email}`} className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
          <Mail size={14} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
