export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

// Experience data
export const experiences: ExperienceItem[] = [
  {
    company: "Himpunan Mahasiswa Teknik Computer - Informatika ITS (HMTC)",
    position: "Staff – Student Talent and Interest",
    period: "March 2024 - December 2024",
    description:
      "Coordinated weekly training schedules for the Informatics Futsal Club, Organized friendly Futsal matches for all Informatics Engineering students, Managed and oversaw the operational activities of the club to ensure consistent participation and performance.",
  },
  {
    company: "Schematics REEVA",
    position: "Expert Staff – Festival Division",
    period: "February 2024 - November 2024",
    description:
      "Developed storyline and scripts for the REEVA 2024 musical drama performance & Served as Front of House (FOH), acting as the primary controller for sound system, lighting, and multimedia during live events.",
  },
  {
    company: "UKM Golf ITS",
    position: "Head of Finance Division",
    period: "February 2024 – December 2024",
    description:
      "Oversaw vendor acquisition for merchandise production to support club branding & Managed merchandise distribution and served as the main liaison for internal logistics and communication.",
  },
];

// Education data
export const education: EducationItem[] = [
  {
    institution: "Sepuluh Nopember Institute of Technology",
    degree: "Bachelor of Information Technology",
    period: "2022 - Present",
    description: "GPA: 3.22/4.0. Active in campus organizations.",
  },
  {
    institution: "Dicoding Bootcamp",
    degree: "Machine Learning Engineer - Batch 8",
    period: "July - November 2025",
    description:
      "Learn machine learning techniques, data processing with Python, and the application of AI algorithms to technology-based industries.",
  },
];

// Skills data
export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Laravel",
];

// Personal data
export const personalInfo = {
  name: "Gayu Baruwa",
  bio: [
    "I am currently pursuing my studies in Informatics Engineering at Institut Teknologi Sepuluh Nopember (ITS). I have a strong interest and skill set in web development, ranging from designing user interfaces to implementing full web functionality.",
    "Throughout my academic journey, I have completed various web development projects and assignments that have strengthened my understanding of responsive design, front-end and back-end development, and modern web frameworks. I enjoy creating digital solutions that are both visually appealing and functionally effective, and I am continuously working to improve and expand my skills in this field.",
  ],
};
