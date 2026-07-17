export interface Experience {
  year: string;
  duration: string;

  role: string;

  organization: string;
  organizationFull: string;

  type: "Internship" | "Leadership" | "Technical" | "Research";

  description: string;

  highlights: string[];
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
  },

  {
    year: "2025",

    duration: "Aug 2025 – May 2026",

    role: "Delegate Affairs Head",

    organization: "Parola",
    organizationFull: "Parola – The Literary Hub",

    type: "Leadership",

    description:
      "Led delegate management and coordinated event operations for one of the university's flagship literary events, ensuring smooth communication, logistics, and participant experience for over 200 delegates.",

    highlights: [
      "Leadership",
      "200+ Delegates",
      "Event Management",
      "Team Coordination",
    ],
  },

  {
    year: "2024",

    duration: "May 2024 – May 2025",

    role: "Technical Team Member",

    organization: "AI/ML HUB",
    organizationFull: "AI/ML HUB",

    type: "Technical",

    description:
      "Contributed to AI and Machine Learning initiatives by participating in technical workshops, collaborative projects, and prototype development focused on computer vision and practical AI applications.",

    highlights: [
      "Machine Learning",
      "Computer Vision",
      "Prototype Development",
      "Technical Collaboration",
    ],
  },
];