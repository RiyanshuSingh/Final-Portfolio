
export interface Skill {
  name: string;
  level: number; // A number from 0 to 100
  tools?: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Achievement {
  title: string;
  description: string;
  source: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface PortfolioData {
  name: string;
  roles: string[];
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  about: {
    bio: string;
    profilePicUrl: string;
  };
  skills: {
    languages: Skill[];
    frontend: Skill[];
    backend: Skill[];
    databases: Skill[];
    tools: Skill[];
  };
  projects: Project[];
  experience: Experience[];
  education: Education[];
  achievements: {
    stats: {
      label: string;
      value: number;
    }[];
    certificates: Achievement[];
  };
  testimonials?: Testimonial[];
  contact: {
    email: string;
  };
}
