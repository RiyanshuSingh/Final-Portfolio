
import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: "Alex Doe",
  roles: ["Data Analyst", "Full-Stack Developer", "Problem Solver"],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  about: {
    bio: "I'm a passionate developer with a knack for creating elegant solutions in the least amount of time. I have a strong foundation in data analysis and full-stack web development, and I thrive on turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you can find me exploring the latest tech trends or enjoying a good book.",
    profilePicUrl: "https://picsum.photos/seed/profile/400/400",
  },
  skills: {
    languages: [
      { name: "JavaScript", level: 95, tools: ["ES6+", "TypeScript"] },
      { name: "Python", level: 90, tools: ["Pandas", "NumPy", "Flask"] },
      { name: "SQL", level: 85, tools: ["PostgreSQL", "MySQL"] },
    ],
    frontend: [
      { name: "React", level: 95, tools: ["Redux", "Next.js"] },
      { name: "Tailwind CSS", level: 90, tools: ["JIT", "DaisyUI"] },
      { name: "Vue.js", level: 75, tools: ["Vuex", "Nuxt.js"] },
    ],
    backend: [
      { name: "Node.js", level: 90, tools: ["Express", "Koa"] },
      { name: "Django", level: 80, tools: ["DRF", "Celery"] },
    ],
    databases: [
        { name: "PostgreSQL", level: 85, tools: ["pgAdmin", "SQLAlchemy"] },
        { name: "MongoDB", level: 80, tools: ["Mongoose", "Atlas"] },
    ],
    tools: [
        { name: "Git & GitHub", level: 95, tools: ["Actions", "Pages"] },
        { name: "Docker", level: 85, tools: ["Compose", "Dockerfile"] },
    ],
  },
  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce site with product management, user authentication, and a Stripe payment gateway.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Dev",
      imageUrl: "https://picsum.photos/seed/project1/600/400",
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Sales Data Dashboard",
      description: "An interactive dashboard for visualizing sales data, with filters, charts, and predictive analytics.",
      tags: ["Python", "Pandas", "D3.js", "Flask"],
      category: "Data Science",
      imageUrl: "https://picsum.photos/seed/project2/600/400",
      repoUrl: "#",
    },
    {
      title: "Machine Learning Model API",
      description: "A RESTful API serving a sentiment analysis model trained on customer reviews.",
      tags: ["Python", "TensorFlow", "Django RF"],
      category: "ML",
      imageUrl: "https://picsum.photos/seed/project3/600/400",
      repoUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio website, built to be interactive and showcase modern frontend technologies.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      category: "Web Dev",
      imageUrl: "https://picsum.photos/seed/project4/600/400",
      liveUrl: "#",
      repoUrl: "#",
    },
  ],
  experience: [
    {
      role: "Senior Full-Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Led development of client-facing web applications, mentored junior developers, and implemented CI/CD pipelines.",
    },
    {
      role: "Data Analyst",
      company: "Data Insights Co.",
      period: "2019 - 2021",
      description: "Analyzed large datasets to extract actionable insights, created automated reports, and built predictive models.",
    },
  ],
  education: [
    {
      degree: "M.S. in Computer Science",
      institution: "University of Technology",
      period: "2017 - 2019",
    },
    {
      degree: "B.S. in Statistics",
      institution: "State College",
      period: "2013 - 2017",
    },
  ],
  achievements: {
    stats: [
        { label: "Projects Completed", value: 15 },
        { label: "Years of Experience", value: 5 },
        { label: "Happy Clients", value: 10 },
    ],
    certificates: [
      {
        title: "Advanced React Patterns",
        source: "Frontend Masters",
        description: "In-depth course on advanced React concepts and performance optimization."
      },
      {
        title: "Data Science Professional Certificate",
        source: "Coursera",
        description: "Comprehensive program covering data analysis, machine learning, and visualization."
      },
      {
        title: "Certified Kubernetes Administrator",
        source: "CNCF",
        description: "Certification for expertise in managing Kubernetes clusters."
      },
    ],
  },
  testimonials: [
    {
      quote: "Alex is a brilliant developer who is able to tackle any problem with creativity and precision. A true asset to any team.",
      author: "Jane Smith",
      company: "CEO, Tech Solutions Inc."
    },
    {
      quote: "The insights Alex provided were game-changing for our business. The dashboards were intuitive and powerful.",
      author: "John Davis",
      company: "Director of Marketing, Data Insights Co."
    },
  ],
  contact: {
    email: "alex.doe@example.com",
  },
};
