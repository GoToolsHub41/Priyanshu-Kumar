export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string; // Placeholder URL
  specs: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  type: string;
}
