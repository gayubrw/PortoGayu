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

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  name: string;
  path: string;
}
