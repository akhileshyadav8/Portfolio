import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const { data: projects } = useQuery({
    queryKey: ["public-projects"],
    queryFn: async () => {
      if (!isSupabaseConfigured) {
        return portfolioData.projects;
      }
      try {
        const { data, error } = await supabase.from("projects").select("*").eq("published", true).order("sort_order");
        if (error) throw error;
        return data;
      } catch (err) {
        console.warn("Supabase query failed, falling back to local data:", err);
        return portfolioData.projects;
      }
    },
    initialData: !isSupabaseConfigured ? portfolioData.projects : undefined,
  });

  const allTags = ["All", ...Array.from(new Set((projects ?? []).flatMap((p) => p.tags ?? [])))];
  const filtered = filter === "All" ? projects : projects?.filter((p) => (p.tags ?? []).includes(filter));

  return (
    <PageWrapper>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Projects" subtitle="Showcasing my work in Data Analytics, ML, and visualization" />

          {allTags.length > 1 && (
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    filter === tag ? "bg-primary text-primary-foreground" : "glass-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {(!filtered || filtered.length === 0) ? (
            <p className="text-center text-muted-foreground">Projects coming soon.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  layout
                  className="glass-card rounded-xl p-6 flex flex-col hover:border-primary/30 transition-colors"
                >
                  <div className="flex-grow">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {(project.tags ?? []).map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                    {project.github_url ? (
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <h3 className="text-lg font-display font-semibold text-foreground mb-2 hover:text-primary transition-colors inline-block">{project.title}</h3>
                      </a>
                    ) : (
                      <h3 className="text-lg font-display font-semibold text-foreground mb-2">{project.title}</h3>
                    )}
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {(project.technologies ?? []).map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">{t}</span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-3 pt-3 border-t border-border">
                      {project.github_url && (
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="View Source Code">
                          <Github size={16} />
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
                            <ExternalLink size={16} />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Projects;
