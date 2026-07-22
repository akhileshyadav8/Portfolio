# Akhilesh Yadav | Professional Data Science Portfolio

This is a modern, responsive, and highly interactive bento-grid portfolio website built for **Akhilesh Yadav** (Data Analyst & Data Science Postgraduate). 

Live Local Preview: [http://localhost:8081](http://localhost:8081)

---

## 👤 About Akhilesh Yadav
I am a Data Science postgraduate student (M.Sc. at Chandigarh University) and a detail-oriented Data Analyst. I specialize in:
- **Data Analytics & BI**: Statistical modeling, Exploratory Data Analysis (EDA), and building interactive dashboards using **Power BI**, **Tableau**, and **Excel**.
- **Machine Learning & Deep Learning**: Designing regression/classification models, Feature Engineering, Neural Networks, **NLP**, and **Computer Vision** pipelines.
- **Backend & APIs**: Developing REST APIs using **FastAPI** & **Pydantic**.
- **Tools**: Git/GitHub, Docker containerization, Streamlit, and AWS EC2 deployments.

---

## 🛠️ Technology Stack
- **Core**: React 18, Vite (Fast build tool), TypeScript
- **Styling**: Tailwind CSS (Fluid grid and layouts), Framer Motion (Smooth page transitions & entrance micro-animations)
- **UI Components**: Radix UI primitives styled with Shadcn UI (Dialogs, Accordeons, Toast notifications)
- **Backend (Optional)**: Supabase (PostgreSQL Database & Storage bucket for resume files)
- **State Management & Queries**: TanStack React Query

---

## 🚀 Features
1. **Bento Grid Hero Layout**: Premium, clean look presenting career highlights, core skills, profile picture, and a quick contact CTA.
2. **Interactive Power BI Dashboards**: Seamless iframe preview modals inside the Projects section so visitors can interact with Power BI dashboards (like the Spotify Analytics report) directly on the website without leaving.
3. **Double-Layer Data Flow**:
   - **Static Data Fallback**: Runs out-of-the-box using local data in `src/data/portfolioData.ts`. Absolutely zero database setup is required to run the site.
   - **Supabase Integration**: If connected, it queries your database tables dynamically and provides an admin panel (`/admin`) to manage skills, projects, and messages.
4. **Branding & Custom SEO**: Formatted for semantic HTML and pre-configured metadata tags for optimal SEO ranking.

---

## 💻 Local Setup & Customization

If you want to run this portfolio on your own machine or customize it with your own credentials, follow these steps:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### 2. Clone and Install
```bash
# Clone the repository
git clone https://github.com/akhileshyadav8/Portfolio.git

# Navigate to the folder
cd Portfolio

# Install all dependencies
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:8081/`.

### 4. Customizing Your Information
The portfolio has a single source of truth for static data. You do not need to rewrite code across multiple pages:
- Open [src/data/portfolioData.ts](src/data/portfolioData.ts).
- Edit the `profile` object (name, title, bio, email, socials).
- Edit the `skills` array (add your own skills and set the proficiency level from `0` to `100`).
- Edit the `projects` array (add your repository links and titles).
- Edit the `certifications` array (add your institutions, dates, and verification links).
- Replace the profile photo in [src/assets/akhilesh.png](src/assets/akhilesh.png) with your own picture (using the same file name or updating the import in `Index.tsx`).
- Replace the PDF in `public/Resume.pdf` with your own resume file.

---

## 📊 How to Get a Power BI Iframe Embed Link
To display an interactive dashboard modal for your Power BI projects:
1. Open your report in the **Power BI Service** (`https://app.powerbi.com`).
2. Navigate to the dashboard workspace.
3. Click on the top menu: **File** ➡️ **Embed report** ➡️ **Publish to web (public)**.
   > ⚠️ **Important**: Do not use "Website or portal", as that requires viewers to sign in with an organizational Office 365 account. "Publish to web (public)" makes it accessible to anyone viewing your portfolio.
4. Copy the URL inside the **"Link you can send in email"** field (or copy the URL from the `src` attribute of the HTML `<iframe>` code).
5. Open [src/data/portfolioData.ts](src/data/portfolioData.ts) and paste this URL into the project's `iframe_url` property:
   ```typescript
   iframe_url: "https://app.powerbi.com/view?r=YOUR_COPIED_TOKEN_HERE"
   ```

---

## 🌐 How to Host Your Portfolio

Hosting this React project is free and takes less than 5 minutes. The recommended platform is **Vercel** (which the project is pre-configured for via `vercel.json` and build scripts).

### Method 1: Automatic Deployments via GitHub (Recommended)
1. Push your local Git repository to GitHub (refer to the instructions below).
2. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.
3. Click **Add New** ➡️ **Project**.
4. Import your portfolio repository from the list.
5. Vercel will automatically detect **Vite** as the framework. Keep the default settings.
6. Click **Deploy**. 
   - *Your site is now live! Every time you run `git push`, Vercel will automatically rebuild and update your live website.*

### Method 2: Deploying via Vercel CLI
If you want to deploy straight from your local terminal:
```bash
# Install Vercel CLI globally
npm install -g vercel

# Run the login command and link your project
vercel login

# Deploy your project
vercel
```
To deploy to production after making changes:
```bash
vercel --prod
```

---

## 📁 Git Repository Upload Instructions

```bash
# Add your GitHub repository URL as remote
git remote add origin <YOUR_GITHUB_REPO_URL>

# Set primary branch to main
git branch -M main

# Push the committed files
git push -u origin main
```
