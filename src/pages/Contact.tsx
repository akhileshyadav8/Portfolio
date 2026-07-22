import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Linkedin, Github, Mail, Instagram } from "lucide-react";
import { toast } from "sonner";
import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import { portfolioData } from "@/data/portfolioData";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      console.log('Supabase is not configured. Form will run in mock mode.');
      return;
    }
    const testConnection = async () => {
      try {
        const { data, error } = await supabase.from('user_roles').select('count');
        console.log('Supabase connection test:', { data, error });
      } catch (err) {
        console.error('Supabase connection error:', err);
      }
    };
    testConnection();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setSending(true);
    
    try {
      console.log('Form submission received:', { name: form.name, email: form.email, message: form.message });

      if (!isSupabaseConfigured) {
        // Simulate network latency
        await new Promise(resolve => setTimeout(resolve, 800));
        console.log('Mock submission successful (Supabase not connected)');
        toast.success("Message sent! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
        return;
      }
      
      // Insert the message into database
      const { data, error } = await supabase
        .from('contact_messages')
        .insert({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim()
        })
        .select();
      
      if (error) throw error;
      
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast.error(`Failed to send message. Please try again or email me directly at ${portfolioData.profile.email}`);
    } finally {
      setSending(false);
    }
  };

  return (
    <PageWrapper>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Get In Touch" subtitle="Let's discuss opportunities, collaborations, or just say hello" />

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 space-y-4"
            >
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                  maxLength={100}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="you@email.com"
                  maxLength={255}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Your message..."
                  maxLength={1000}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send Message"} <Send size={16} />
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center gap-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing data analysis projects, machine learning workflows, 
                collaborations, or job opportunities. Feel free to reach out using the form or the links below!
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="flex items-center gap-3 glass-card rounded-lg p-4 hover:border-primary/30 transition-colors"
                >
                  <Mail className="text-primary" size={20} />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-xs text-muted-foreground">{portfolioData.profile.email}</p>
                  </div>
                </a>

                <a
                  href={portfolioData.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass-card rounded-lg p-4 hover:border-primary/30 transition-colors"
                >
                  <Linkedin className="text-primary" size={20} />
                  <div>
                    <p className="text-sm font-medium text-foreground">LinkedIn</p>
                    <p className="text-xs text-muted-foreground">linkedin.com/in/akhilesh-yadav88</p>
                  </div>
                </a>

                <a
                  href={portfolioData.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass-card rounded-lg p-4 hover:border-primary/30 transition-colors"
                >
                  <Github className="text-primary" size={20} />
                  <div>
                    <p className="text-sm font-medium text-foreground">GitHub</p>
                    <p className="text-xs text-muted-foreground">github.com/akhileshyadav8</p>
                  </div>
                </a>

                <a
                  href={portfolioData.profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass-card rounded-lg p-4 hover:border-primary/30 transition-colors"
                >
                  <Instagram className="text-primary" size={20} />
                  <div>
                    <p className="text-sm font-medium text-foreground">Instagram</p>
                    <p className="text-xs text-muted-foreground">@akhil_yadav972</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
