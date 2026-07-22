export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  technologies: string[];
  github_url: string | null;
  demo_url: string | null;
  published: boolean;
  sort_order: number;
}

export interface Skill {
  id: string;
  name: string;
  proficiency: number;
  category: string;
  sort_order: number;
  icon_name: string | null;
}

export interface Certification {
  id: string;
  title: string;
  institution: string;
  completion_date: string | null;
  verification_url: string | null;
  image_url: string | null;
  sort_order: number;
}

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string | null;
  methodology: string | null;
  technologies: string[];
  publication_url: string | null;
  pdf_url: string | null;
  published: boolean;
  published_at: string | null;
}

export const portfolioData = {
  profile: {
    name: "Akhilesh Yadav",
    title: "Data Analyst | Data Science Postgraduate",
    email: "yadavakhil766@gmail.com",
    phone: "+91 7487850787",
    location: "Surat, Gujarat, India",
    linkedin: "https://www.linkedin.com/in/akhilesh-yadav88/",
    github: "https://github.com/akhileshyadav8",
    instagram: "https://www.instagram.com/akhil_yadav972/",
    bio: "Data Science postgraduate and detail-oriented Data Analyst with expertise in Python, SQL, Power BI, and Machine Learning. Skilled in data analysis, statistical modeling, dashboard development, and predictive analytics.",
    detailedBio: "I am a Data Science postgraduate student and a detail-oriented Data Analyst with a solid background in Computer Applications. I specialize in building data-driven solutions, developing REST APIs using FastAPI, containerizing applications with Docker, and deploying projects on AWS. I enjoy transforming complex data into actionable business insights that drive impact.",
    stats: {
      education: "M.Sc. Data Science",
      specialization: "Data Analytics",
      projects: 3,
      focus: "Machine Learning & BI"
    }
  },
  skills: [
    // Programming
    { id: "s1", name: "Python", proficiency: 95, category: "Programming", sort_order: 1, icon_name: "Code" },
    
    // Data Science / ML
    { id: "s2", name: "Machine Learning", proficiency: 88, category: "Data Science", sort_order: 2, icon_name: "Brain" },
    { id: "s3", name: "Exploratory Data Analysis (EDA)", proficiency: 95, category: "Data Science", sort_order: 3, icon_name: "Brain" },
    { id: "s4", name: "Pandas & NumPy", proficiency: 93, category: "Data Science", sort_order: 4, icon_name: "Brain" },
    { id: "s5", name: "Matplotlib & Seaborn", proficiency: 90, category: "Data Science", sort_order: 5, icon_name: "Brain" },
    { id: "s6", name: "Scikit-Learn", proficiency: 85, category: "Data Science", sort_order: 6, icon_name: "Brain" },
    { id: "s7", name: "Statistical Modeling", proficiency: 85, category: "Data Science", sort_order: 7, icon_name: "Brain" },
    
    // Tools & Databases
    { id: "s8", name: "SQL (MySQL, MongoDB)", proficiency: 90, category: "Tools", sort_order: 8, icon_name: "Database" },
    { id: "s9", name: "Power BI & Tableau", proficiency: 90, category: "Tools", sort_order: 9, icon_name: "Database" },
    { id: "s10", name: "Streamlit", proficiency: 88, category: "Tools", sort_order: 10, icon_name: "Database" },
    { id: "s11", name: "Git & GitHub", proficiency: 85, category: "Tools", sort_order: 11, icon_name: "Database" },
    { id: "s12", name: "Excel Dashboarding", proficiency: 85, category: "Tools", sort_order: 12, icon_name: "Database" },
    { id: "s13", name: "AWS EC2 Deployment", proficiency: 75, category: "Tools", sort_order: 13, icon_name: "Database" },

    // MLOps & Backend
    { id: "s14", name: "FastAPI & Pydantic", proficiency: 80, category: "MLOps", sort_order: 14, icon_name: "Settings" },
    { id: "s15", name: "Docker Containerization", proficiency: 78, category: "MLOps", sort_order: 15, icon_name: "Settings" }
  ] as Skill[],
  
  projects: [
    {
      id: "p1",
      title: "Punjab Groundwater Depletion Analysis and Prediction",
      description: "Analyzed 10,000+ groundwater records across 23 districts of Punjab from 1994–2024 to identify depletion trends. Developed regression models to forecast groundwater levels for 2025–2030 with ~91% prediction accuracy. Built an interactive Streamlit dashboard with temporal and geospatial visualizations for trend analysis.",
      tags: ["Machine Learning", "Streamlit", "Python", "Data Science"],
      technologies: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "Matplotlib"],
      github_url: "https://github.com/akhileshyadav8",
      demo_url: null,
      published: true,
      sort_order: 1
    },
    {
      id: "p2",
      title: "Walmart Sales Analysis",
      description: "Used SQL queries and Python to analyze sales transactions and identify revenue trends, customer behavior, and top performing product categories. Built an interactive Power BI dashboard with KPIs, sales trends, and business intelligence insights for regional performance analysis. Performed data cleaning and exploratory analysis to support business-focused decision making.",
      tags: ["Data Analytics", "Power BI", "SQL", "Python"],
      technologies: ["SQL", "Python", "Power BI", "Pandas"],
      github_url: "https://github.com/akhileshyadav8",
      demo_url: null,
      published: true,
      sort_order: 2
    },
    {
      id: "p3",
      title: "Uber Rides Analysis",
      description: "Performed exploratory data analysis to identify peak hours, demand patterns, and ride usage trends. Created visualizations using Matplotlib and Seaborn to analyze time-based ride distribution patterns.",
      tags: ["EDA", "Python", "Data Analytics"],
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      github_url: "https://github.com/akhileshyadav8",
      demo_url: null,
      published: true,
      sort_order: 3
    }
  ] as Project[],
  
  certifications: [
    {
      id: "c1",
      title: "IBM Data Analyst Professional Certificate",
      institution: "Coursera",
      completion_date: "2025",
      verification_url: "https://coursera.org",
      image_url: null,
      sort_order: 1
    },
    {
      id: "c2",
      title: "SQL (Advanced)",
      institution: "HackerRank",
      completion_date: "2025",
      verification_url: "https://hackerrank.com",
      image_url: null,
      sort_order: 2
    },
    {
      id: "c3",
      title: "Business Intelligence Tool: Power BI",
      institution: "Veer Narmad South Gujarat University",
      completion_date: "2025",
      verification_url: null,
      image_url: null,
      sort_order: 3
    }
  ] as Certification[],
  
  research: [] as ResearchPaper[]
};
