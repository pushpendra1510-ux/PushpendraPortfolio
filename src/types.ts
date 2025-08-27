export interface Skill {
  name: string;
  proficiency: number;
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  linkedinUrl: string;
  githubUrl: string;
}