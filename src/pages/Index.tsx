import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import PageWrapper from "@/components/PageWrapper";
import akhileshImg from "@/assets/akhilesh.jpg";
import akhileshLightImg from "@/assets/akhilesh-light.jpg";
import { portfolioData } from "@/data/portfolioData";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initial theme check
    setIsDark(document.documentElement.classList.contains("dark"));

    // Watch for theme toggles on <html> tag
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  const { data: projects } = useQuery({
    queryKey: ["public-projects"],
    queryFn: async () => {
      if (!isSupabaseConfigured) {
        return portfolioData.projects.slice(0, 4);
      }
      try {
        const { data, error } = await supabase.from("projects").select("*").eq("published", true).order("sort_order").limit(4);
        if (error) throw error;
        return data;
      } catch (err) {
        console.warn("Supabase query failed, falling back to local data:", err);
        return portfolioData.projects.slice(0, 4);
      }
    },
    initialData: !isSupabaseConfigured ? portfolioData.projects.slice(0, 4) : undefined,
  });

  const { data: skills } = useQuery({
    queryKey: ["public-skills"],
    queryFn: async () => {
      if (!isSupabaseConfigured) {
        return portfolioData.skills;
      }
      try {
        const { data, error } = await supabase.from("skills").select("*").order("sort_order");
        if (error) throw error;
        return data;
      } catch (err) {
        console.warn("Supabase query failed, falling back to local data:", err);
        return portfolioData.skills;
      }
    },
    initialData: !isSupabaseConfigured ? portfolioData.skills : undefined,
  });

  const { data: resumeUrl } = useQuery({
    queryKey: ["public-resume"],
    queryFn: async () => {
      if (!isSupabaseConfigured) {
        return "/Resume.pdf";
      }
      try {
        const { data, error } = await supabase.storage.from('resumes').list();
        if (error || !data || data.length === 0) {
          return "/Resume.pdf";
        }
        const { data: { publicUrl } } = supabase.storage.from('resumes').getPublicUrl(data[0].name);
        return publicUrl;
      } catch (err) {
        return "/Resume.pdf";
      }
    },
    initialData: "/Resume.pdf",
  });

  const topSkills = (skills ?? []).slice(0, 6);

  return (
    <PageWrapper>
      <div className="relative min-h-screen mesh-gradient noise-overlay">
        {/* Hero Bento Section */}
        <section className="relative z-10 pt-16 md:pt-28 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">

              {/* Main Hero Card - spans full width with image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="md:col-span-full bento-card p-8 md:p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Hero Content - spans 1 column */}
                  <div className="md:col-span-1">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium mb-6"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
                      Open to opportunities
                    </motion.div>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-4">
                      <span className="text-foreground">Akhilesh </span>
                      <span className="gradient-text">Yadav</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground font-display font-light mb-3">
                      {portfolioData.profile.title}
                    </p>

                    <p className="text-muted-foreground max-w-md mb-6 text-sm leading-relaxed">
                      {portfolioData.profile.bio}
                    </p>
                  </div>

                  {/* Profile Image - spans 1 column */}
                  <div className="md:col-span-1 relative group flex justify-center items-center">
                    {/* Soft background glow to blend the black card nicely in light theme & add premium feel in dark theme */}
                    <div className="absolute w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] bg-gradient-to-tr from-primary/20 via-primary/5 to-secondary/30 rounded-2xl blur-2xl opacity-70 dark:opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className={`relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] overflow-hidden rounded-2xl border border-border/30 shadow-2xl transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-[#e8e8e8]'}`}>
                      <img
                        src={isDark ? akhileshImg : akhileshLightImg}
                        alt="Akhilesh Yadav"
                        className={`w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ${isDark ? 'bg-black' : 'bg-[#e8e8e8]'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-2xl" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2">
                          <a href={portfolioData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-background/60 backdrop-blur flex items-center justify-center text-foreground hover:text-primary transition-colors">
                            <Linkedin size={14} />
                          </a>
                          <a href={portfolioData.profile.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-background/60 backdrop-blur flex items-center justify-center text-foreground hover:text-primary transition-colors">
                            <Github size={14} />
                          </a>
                          <a href={`mailto:${portfolioData.profile.email}`} className="w-8 h-8 rounded-lg bg-background/60 backdrop-blur flex items-center justify-center text-foreground hover:text-primary transition-colors">
                            <Mail size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Buttons Section - spans full width below photo on desktop */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="md:col-span-full mt-4 md:mt-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 w-full">
                      <Link
                        to="/projects"
                        className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 md:px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        View Projects <ArrowRight size={14} />
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-3 sm:px-4 md:px-5 py-2.5 rounded-xl glass-card text-foreground text-sm font-medium hover:bg-secondary transition-colors"
                      >
                        Contact Me
                      </Link>
                      <a
                        href={resumeUrl || "/Resume.pdf"}
                        download
                        className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 md:px-5 py-2.5 rounded-xl glass-card text-foreground text-sm font-medium hover:bg-secondary transition-colors"
                      >
                        <Download size={14} /> Resume
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Skills Grid Card - spans 4 cols */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="md:col-span-4 bento-card"
              >
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Core Skills</h3>
                <div className="grid grid-cols-2 gap-2">
                  {topSkills.map((skill) => (
                    <div key={skill.id} className="bg-secondary/50 rounded-xl px-3 py-2.5 group/skill hover:bg-primary/10 transition-colors">
                      <p className="text-xs font-medium text-foreground truncate">{skill.name}</p>
                      <div className="mt-1.5 h-1 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/skills" className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-4 font-medium">
                  All skills <ArrowRight size={10} />
                </Link>
              </motion.div>

              {/* Quick Stats Card - spans 4 cols */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="md:col-span-4 bento-card flex flex-col justify-between"
              >
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground min-w-[80px]">Education</span>
                    <span className="text-sm text-foreground font-medium text-right">{portfolioData.profile.stats.education}</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground min-w-[80px]">Specialization</span>
                    <span className="text-sm text-foreground font-medium text-right">{portfolioData.profile.stats.specialization}</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground min-w-[80px]">Projects</span>
                    <span className="text-sm text-foreground font-medium text-right">{portfolioData.profile.stats.projects}+</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground min-w-[80px]">Focus</span>
                    <span className="text-sm text-foreground font-medium text-right">{portfolioData.profile.stats.focus}</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Card - spans 4 cols */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="md:col-span-4 bento-card bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20 flex flex-col justify-center items-center text-center"
              >
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  Let's <span className="gradient-text">Collaborate</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Interested in Data Science or Analytics projects?
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Get In Touch <ArrowRight size={14} />
                </Link>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Featured Projects Bento */}
        <section className="relative z-10 py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Featured Projects</h2>
                <p className="text-sm text-muted-foreground mt-1">Recent work in Data Analysis and Machine Learning</p>
              </div>
              <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium">
                View all <ArrowRight size={14} />
              </Link>
            </div>

            {projects && projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bento-card group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {(project.tags ?? []).map((tag) => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/35">
                      <div className="flex flex-wrap gap-1.5">
                        {(project.technologies ?? []).slice(0, 3).map((t) => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded-lg bg-secondary text-secondary-foreground">{t}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3">
                        {project.github_url && (
                          <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="View Source Code">
                            <Github size={14} />
                          </a>
                        )}
                        {project.iframe_url ? (
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="text-primary hover:opacity-80 transition-opacity flex items-center gap-1 text-xs font-medium" title="Interact with Dashboard">
                                <ExternalLink size={14} />
                                <span>Interactive Demo</span>
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl w-[90vw] h-[80vh] flex flex-col p-4 bg-background border border-border">
                              <DialogHeader>
                                <DialogTitle className="font-display font-bold text-lg">{project.title} - Interactive Dashboard</DialogTitle>
                              </DialogHeader>
                              <div className="flex-1 w-full h-full rounded-lg overflow-hidden border border-border mt-2 bg-muted/20">
                                <iframe
                                  src={project.iframe_url}
                                  className="w-full h-full"
                                  frameBorder="0"
                                  allowFullScreen={true}
                                  title={project.title}
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                        ) : (
                          project.demo_url && (
                            <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="View Demo">
                              <ExternalLink size={14} />
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground">Projects coming soon.</p>
            )}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Index;
