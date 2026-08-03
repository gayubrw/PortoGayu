export interface ProjectType {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  features?: string[];
}

export interface SkillType {
  name: string;
  level: number;
}

export interface NavItem {
  name: string;
  path: string;
}

// Database-driven content types
export interface AboutDataType {
  personalInfo: {
    name: string;
    title?: string;
    bio: string | string[]; // Support both string and array of strings
    location?: string;
    email?: string;
  };
  education: Array<{
    degree: string;
    institution: string;
    period: string;
    description: string;
  }>;
  experience: Array<{
    position: string;
    company: string;
    period: string;
    type?: string; // Make type optional
    description: string;
    achievements?: string[];
  }>;
  workExperience?: Array<{
    position: string;
    company: string;
    period: string;
    type?: string;
    description: string;
    achievements?: string[];
  }>;
  skills: Array<{
    category: string;
    skills: SkillType[];
  }>;
}

export interface HeroDataType {
  tagline: string;
  description: string;
  ctaButtons: Array<{
    text: string;
    href: string;
    type: "primary" | "secondary";
  }>;
}
