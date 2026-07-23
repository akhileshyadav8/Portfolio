export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  technologies: string[];
  github_url: string | null;
  demo_url: string | null;
  iframe_url?: string | null;
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
    title: "Data Analyst | Machine Learning Engineer | NLP & Deep Learning Enthusiast",
    email: "yadavakhil766@gmail.com",
    phone: "+91 7487850787",
    location: "Surat, Gujarat, India",
    linkedin: "https://www.linkedin.com/in/akhilesh-yadav88/",
    github: "https://github.com/akhileshyadav8",
    instagram: "https://www.instagram.com/akhil_yadav972/",
    bio: "Data Science postgraduate specializing in Data Analytics, Machine Learning, NLP, and Deep Learning. Passionate about building data-driven solutions using Python, SQL, Excel and Power BI to solve real-world problems.",
    detailedBio: "I am a Data Science postgraduate student and an aspiring Machine Learning Engineer. I specialize in applying statistical models and deep learning algorithms to solve real-world problems. My experience ranges from analyzing sales and ride data to predicting environmental trends like groundwater depletion, and designing interactive BI dashboards. I build clean, containerized workflows using FastAPI, Docker, and AWS.",
    stats: {
      education: "M.Sc. Data Science",
      specialization: "Machine Learning & BI",
      projects: 5,
      focus: "Deep Learning & NLP"
    }
  },
  skills: [
    // Programming
    { id: "s1", name: "Python", proficiency: 95, category: "Programming", sort_order: 1, icon_name: "Code" },
    
    // Data Science / ML
    { id: "s2", name: "Machine Learning", proficiency: 88, category: "Data Science", sort_order: 2, icon_name: "Brain" },
    { id: "s2_dl", name: "Deep Learning", proficiency: 82, category: "Data Science", sort_order: 3, icon_name: "Brain" },
    { id: "s2_nlp", name: "Natural Language Processing (NLP)", proficiency: 80, category: "Data Science", sort_order: 4, icon_name: "Brain" },
    { id: "s2_cv", name: "Computer Vision", proficiency: 78, category: "Data Science", sort_order: 5, icon_name: "Brain" },
    { id: "s2_fe", name: "Feature Engineering", proficiency: 85, category: "Data Science", sort_order: 6, icon_name: "Brain" },
    { id: "s3", name: "Exploratory Data Analysis (EDA)", proficiency: 95, category: "Data Science", sort_order: 7, icon_name: "Brain" },
    { id: "s4", name: "Pandas & NumPy", proficiency: 93, category: "Data Science", sort_order: 8, icon_name: "Brain" },
    { id: "s5", name: "Matplotlib & Seaborn", proficiency: 90, category: "Data Science", sort_order: 9, icon_name: "Brain" },
    { id: "s6", name: "Scikit-Learn", proficiency: 85, category: "Data Science", sort_order: 10, icon_name: "Brain" },
    { id: "s7", name: "Statistical Modeling", proficiency: 85, category: "Data Science", sort_order: 11, icon_name: "Brain" },
    
    // Tools & Databases
    { id: "s8", name: "SQL (MySQL, MongoDB)", proficiency: 90, category: "Tools", sort_order: 12, icon_name: "Database" },
    { id: "s9", name: "Power BI & Tableau", proficiency: 90, category: "Tools", sort_order: 13, icon_name: "Database" },
    { id: "s10", name: "Streamlit", proficiency: 88, category: "Tools", sort_order: 14, icon_name: "Database" },
    { id: "s11", name: "Git & GitHub", proficiency: 85, category: "Tools", sort_order: 15, icon_name: "Database" },
    { id: "s12", name: "Excel Dashboarding", proficiency: 85, category: "Tools", sort_order: 16, icon_name: "Database" },
    { id: "s13", name: "AWS EC2 Deployment", proficiency: 75, category: "Tools", sort_order: 17, icon_name: "Database" },

    // MLOps & Backend
    { id: "s14", name: "FastAPI & Pydantic", proficiency: 80, category: "MLOps", sort_order: 18, icon_name: "Settings" },
    { id: "s15", name: "Docker Containerization", proficiency: 78, category: "MLOps", sort_order: 19, icon_name: "Settings" }
  ] as Skill[],
  
  projects: [
    {
      id: "p1",
      title: "Punjab Groundwater Depletion Analysis and Prediction",
      description: "Analyzed 10,000+ groundwater records across 23 districts of Punjab from 1994–2024 to identify depletion trends. Developed regression models to forecast groundwater levels for 2025–2030 with ~91% prediction accuracy. Built an interactive Streamlit dashboard with temporal and geospatial visualizations for trend analysis.",
      tags: ["Machine Learning", "Streamlit", "Python", "Data Science"],
      technologies: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "Matplotlib"],
      github_url: "https://github.com/akhileshyadav8/Punjab-Groundwater-Depletion-Analysis-and-Prediction",
      demo_url: null,
      published: true,
      sort_order: 1
    },
    {
      id: "p2",
      title: "Spotify Analytics PowerBI Dashboard",
      description: "Built a dynamic and interactive Power BI dashboard analyzing Spotify streaming history and music catalog. Engineered data modeling and DAX measures to track listening hours, top artists, genre distributions, and song popularity over time, providing valuable behavioral and music preference insights.",
      tags: ["Power BI", "Data Analytics", "Music Analytics"],
      technologies: ["Power BI", "DAX", "Power Query", "Excel"],
      github_url: "https://github.com/akhileshyadav8/Spotify-Analytics-PowerBI-Dashboard",
      demo_url: null,
      // Using a working Microsoft Power BI public sample dashboard as a showcase placeholder
      iframe_url: "https://app.powerbi.com/view?r=eyJrIjoiYTMxNjFjNmItZmE0Zi00Nzc4LTgwNzItODlhMDhhM2ZmZDk2IiwidCI6IjM0YmQ4YmVkLTJhYzEtNDFhZS05ZjA4LTRlMGEzZjExNzA2YyJ9",
      published: true,
      sort_order: 2
    },
    {
      id: "p3",
      title: "Walmart Sales Analysis",
      description: "Used SQL queries and Python to analyze sales transactions and identify revenue trends, customer behavior, and top performing product categories. Built an interactive Power BI dashboard with KPIs, sales trends, and business intelligence insights for regional performance analysis. Performed data cleaning and exploratory analysis to support business-focused decision making.",
      tags: ["Data Analytics", "Power BI", "SQL", "Python"],
      technologies: ["SQL", "Python", "Power BI", "Pandas"],
      github_url: "https://github.com/akhileshyadav8/Walmart-Analysis-Python-SQL-PowerBI",
      demo_url: null,
      published: true,
      sort_order: 3
    },
    {
      id: "p4",
      title: "Uber Rides Analysis",
      description: "Performed exploratory data analysis to identify peak hours, demand patterns, and ride usage trends. Created visualizations using Matplotlib and Seaborn to analyze time-based ride distribution patterns.",
      tags: ["EDA", "Python", "Data Analytics"],
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      github_url: "https://github.com/akhileshyadav8/Uber-Rides-Analysis",
      demo_url: null,
      published: true,
      sort_order: 4
    },
    {
      id: "p5",
      title: "Amazon Prime Video PowerBi Dashboard",
      description: "Designed an interactive Power BI dashboard analyzing Amazon Prime Video content catalog. Cleaned and structured the dataset to present distributions of content type (movies vs TV shows), content ratings, release year trends, and genre heatmaps to uncover platform catalog statistics.",
      tags: ["Power BI", "Data Visualization", "Content Analytics"],
      technologies: ["Power BI", "DAX", "Data Cleaning"],
      github_url: "https://github.com/akhileshyadav8/Amazon-Prime-Video-PowerBi-Dashboard",
      demo_url: null,
      published: true,
      sort_order: 5
    }
  ] as Project[],
  
  certifications: [
    {
      id: "c1",
      title: "IBM Data Analyst Professional Certificate",
      institution: "Coursera",
      completion_date: "2026",
      verification_url: "https://www.coursera.org/account/accomplishments/specialization/certificate/FQ0EJDEH69B2",
      image_url: null,
      sort_order: 1
    },
    {
      id: "c2",
      title: "SQL (Advanced)",
      institution: "HackerRank",
      completion_date: "2025",
      verification_url: "https://www.hackerrank.com/certificates/82d07ffa52a3",
      image_url: null,
      sort_order: 2
    },
    {
      id: "c4",
      title: "Introduction to MS Excel",
      institution: "Simplilearn",
      completion_date: "2025",
      verification_url: "https://simpli-web.app.link/e/lVACAq4C04b",
      image_url: null,
      sort_order: 3
    },
    {
      id: "c5",
      title: "Python for Beginners",
      institution: "Simplilearn",
      completion_date: "2025",
      verification_url: "https://simpli-web.app.link/e/zQkOVnbD04b",
      image_url: null,
      sort_order: 4
    },
    {
      id: "c3",
      title: "Business Intelligence Tool: Power BI",
      institution: "Veer Narmad South Gujarat University",
      completion_date: "2025",
      verification_url: "https://drive.google.com/file/d/1aUPR6wpA960u4CCXV77MRT0B08YYx1LE/view",
      image_url: null,
      sort_order: 5
    }
  ] as Certification[],
  
  research: [] as ResearchPaper[]
};
