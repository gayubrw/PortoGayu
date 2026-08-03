export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  type?: string;
  description: string;
  achievements?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

// Organizational Experience data
export const experiences: ExperienceItem[] = [
  {
    company: "Himpunan Mahasiswa Teknik Computer - Informatika ITS (HMTC)",
    position: "Staff – Student Talent and Interest",
    period: "March 2024 - December 2024",
    type: "Organization",
    description:
      "Coordinated weekly training schedules for the Informatics Futsal Club, Organized friendly Futsal matches for all Informatics Engineering students, Managed and oversaw the operational activities of the club to ensure consistent participation and performance.",
  },
  {
    company: "Schematics ITS",
    position: "Staff – Public Relations Division",
    period: "February 2023 - February 2024",
    type: "Organization",
    description:
      "Served as the social media administrator for Schematics' Instagram account, responsible for curating and publishing content that documented all organizational activities and initiatives.",
  },
  {
    company: "Schematics ITS",
    position: "Expert Staff – REEVA Division",
    period: "February 2024 - November 2024",
    type: "Organization",
    description:
      "Developed storyline and scripts for the REEVA 2024 musical drama performance & Served as Front of House (FOH), acting as the primary controller for sound system, lighting, and multimedia during live events.",
  },
  {
    company: "UKM Golf ITS",
    position: "Head of Finance Division",
    period: "February 2023 - February 2024",
    description:
      "Oversaw vendor acquisition for merchandise production to support club branding. Managed merchandise distribution and served as the main liaison for internal logistics and communication.",
  },
  {
    company: "UKM Golf ITS",
    position: "Head of Finance Division",
    period: "February 2024 - February 2025",
    description:
      "Oversaw vendor acquisition for merchandise production to support club branding. Managed merchandise distribution and served as the main liaison for internal logistics and communication.",
  },
];

// Education data
export const education: EducationItem[] = [
  {
    institution: "Institut Teknologi Sepuluh Nopember (ITS)",
    degree: "Bachelor of Informatics Engineering",
    period: "2022 - 2026",
    description: "GPA: 3.41/4.00",
  },
  {
    institution: "Dicoding Bootcamp",
    degree: "Machine Learning Engineer - Batch 8",
    period: "June 2025 - November 2025",
    description:
      "Learn machine learning techniques, data processing with Python, and the application of AI algorithms to technology-based industries.",
  },
];

// Skills data
export const skills = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Laravel", level: 85 },
      { name: "PHP", level: 80 },
    ],
  },
];

// Personal data
export const personalInfo = {
  name: "Gayu Baruwa",
  bio: [
    "I'm an Informatics Engineering student at Institut Teknologi Sepuluh Nopember (ITS), with a primary focus on Machine Learning, NLP, and Data Science, complemented by full-stack web development experience.",
    "I've worked on projects covering text clustering, deep learning-based computer vision, and end-to-end ML pipelines, from data preprocessing to model evaluation. I also completed Dicoding Indonesia's Machine Learning Bootcamp (Batch 8).",
    "On the software engineering side, I interned at GMF AeroAsia, building internal automation tools using Microsoft Power Apps, Power Automate, and SharePoint. I've also built web applications using Laravel, Vue.js, React, and Next.js.",
  ],
};

// Professional Work Experience data (rendered above Organizational Experience)
export const workExperience: ExperienceItem[] = [
  {
    company: "PT Garuda Maintenance Facility AeroAsia Tbk (GMF AeroAsia)",
    position: "Internship – Web/App Development",
    period: "July 2025 - October 2025",
    type: "Internship",
    description:
      "Built internal business applications and workflow automation for operational teams using the Microsoft Power Platform.",
    achievements: [
      "Developed internal business applications using Microsoft Power Apps, with SharePoint Lists as the data backend",
      "Automated operational workflows using Power Automate",
      "Collaborated with cross-functional teams to translate business requirements into technical solutions",
    ],
  },
];

// Combined about data export
export const aboutData = {
  personalInfo,
  education,
  experience: experiences,
  workExperience,
  skills,
};
