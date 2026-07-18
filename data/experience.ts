export interface Experience {
  year: string;
  duration: string;

  role: string;

  organization: string;
  organizationFull: string;

  type: "Internship" | "Leadership" | "Technical" | "Research";

  description: string;

  highlights: string[];

  certificate: string;

  tech: string[];
}

export const experiences: Experience[] = [
  {
    year: "2026",
    duration: "Jun 2026 – Jul 2026",

    role: "Summer Intern (IT Department)",

    organization: "Voltas",
    organizationFull: "Voltas Limited",

    type: "Internship",

    description:
      "Worked in the IT Department at Voltas Limited, gaining exposure to enterprise software systems, corporate IT workflows, and cross-functional collaboration while contributing to technology-driven business operations.",

    highlights: [
      "Enterprise IT",
      "Corporate Workflows",
      "Cross-functional Collaboration",
      "Professional Development",
    ],

    certificate: "https://drive.google.com/file/d/1hts1iLsll0C_D5x4S4D7ZDFHq6JkhSc8/view?usp=drive_link",

    tech: [
      "Python", 
      "SQL", 
      "MS Excel", 
      "Windows", 
      "SAP ERP (Exposure)", 
      "Networking Basics",
    ],
  },
];