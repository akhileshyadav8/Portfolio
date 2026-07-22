import { motion } from "framer-motion";
import { GraduationCap, Target, Lightbulb, Rocket } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";

const timeline = [
  { 
    year: "2022 - 2025", 
    title: "Bachelor of Computer Application (BCA)", 
    desc: "SDJ International College, Surat, Gujarat. Built a strong foundation in computer applications, programming paradigms, and database systems. Graduated with a CGPA of 8.61.", 
    icon: GraduationCap 
  },
  { 
    year: "2025 - 2027", 
    title: "M.Sc. Data Science", 
    desc: "Chandigarh University, Mohali, Punjab. Pursuing advanced postgraduate studies in statistical modeling, machine learning, data cleaning, exploratory data analysis, and predictive analytics. Current CGPA of 8.30.", 
    icon: Rocket 
  },
];

const expertise = [
  { title: "Data Analysis", desc: "Exploratory Data Analysis (EDA), Data Wrangling, Statistical Analysis, Data Cleaning" },
  { title: "Databases", desc: "Designing and querying relational databases using SQL/MySQL and NoSQL databases like MongoDB" },
  { title: "Machine Learning", desc: "Implementing regression and classification algorithms, feature engineering, and model evaluation" },
  { title: "Data Visualization", desc: "Creating dashboards and data stories using Power BI, Excel, and Tableau" },
  { title: "Libraries", desc: "Developing analytical workflows using Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn" },
  { title: "Backend & APIs", desc: "Building scalable backend services and APIs using FastAPI and Pydantic" },
];

const About = () => (
  <PageWrapper>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="Passionate about transforming complex data into actionable insights" />

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Target className="text-primary" size={20} /> Career Goals
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I aspire to work as a Data Analyst or Data Scientist, designing data-driven 
              workflows and machine learning pipelines that solve complex business challenges. 
              My focus is on translating raw metrics into key operational insights.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a background in both computer applications and advanced data science, 
              I seek to combine software engineering practices with statistical modeling to 
              create reliable and reproducible analytical systems.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Lightbulb className="text-primary" size={20} /> Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To leverage statistics, predictive modeling, and business intelligence toolsets to 
              streamline data pipelines and help organizations make highly informed decisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I value analytical rigor, clean and documented code, continuous learning, and 
              the power of visualization to communicate complex findings effectively.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <SectionHeading title="Education" subtitle="My academic journey in Computer Application and Data Science" />
        <div className="max-w-2xl mx-auto space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-primary" size={18} />
                </div>
                {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-8">
                <span className="text-xs text-primary font-medium">{item.year}</span>
                <h4 className="text-lg font-display font-semibold text-foreground mt-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise */}
        <div className="mt-20">
          <SectionHeading title="Areas of Expertise" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-5 hover:border-primary/30 transition-colors"
              >
                <h4 className="font-display font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default About;
