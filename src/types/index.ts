export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  image: string;
  gradient: string;
  challenges: string[];
  outcomes: string[];
  date: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  date: string;
  readTime: number;
  coverGradient: string;
}

export interface Skill {
  name: string;
  level: number; // 0–100
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  icon: string;
  color: string;
}

export interface Education {
  degree: string;
  major: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  gpa: string;
  coursework: string[];
  achievements: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
