import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiPostgresql,
  SiTensorflow,
  SiOpencv,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiFirebase,
} from "react-icons/si";

import {
  Database,
  Workflow,
  ShieldCheck,
  Boxes,
  Package,
  MonitorCog,
  Network,
  Sparkles,
  Code2,
  Monitor,
  Server,
  BrainCircuit,
  Cloud,
  GraduationCap,
} from "lucide-react";

export const skills = [
  {
    title: "Languages",
    icon: Code2,
    description:
      "Languages I use for problem solving, backend systems and application development.",

    items: [
      {
        name: "C++",
        icon: SiCplusplus,
      },
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "SQL",
        icon: Database,
      },
    ],
  },

  {
    title: "Frontend",
    icon: Monitor,
    description:
      "Modern frontend technologies focused on responsive and interactive user experiences.",

    items: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "HTML5",
        icon: SiHtml5,
      },
      {
        name: "CSS3",
        icon: SiCss,
      },
    ],
  },

  {
    title: "Backend",
    icon: Server,
    description:
      "Building scalable APIs, authentication systems and real-time applications.",

    items: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "REST APIs",
        icon: Workflow,
      },
      {
        name: "JWT",
        icon: ShieldCheck,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
    ],
  },

  {
    title: "Databases",
    icon: Database,
    description:
      "Designing efficient schemas and managing structured and unstructured data.",

    items: [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
    ],
  },

  {
    title: "AI & Computer Vision",
    icon: BrainCircuit,
    description:
      "Machine learning, computer vision and handcrafted feature engineering.",

    items: [
      {
        name: "TensorFlow",
        icon: SiTensorflow,
      },
      {
        name: "OpenCV",
        icon: SiOpencv,
      },
      {
        name: "Scikit-Learn",
        icon: SiScikitlearn,
      },
      {
        name: "Feature Engineering",
        icon: Sparkles,
      },
    ],
  },

  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description:
      "Deployment, version control and cloud platforms used across projects.",

    items: [
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "Docker",
        icon: SiDocker,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
      {
        name: "Render",
        icon: Cloud,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
      },
      {
        name: "AWS EC2",
        icon: Cloud,
      },
    ],
  },

  {
    title: "Core Computer Science",
    icon: GraduationCap,
    description:
      "Strong engineering fundamentals that support software design and problem solving.",

    items: [
      {
        name: "Data Structures & Algorithms",
        icon: Boxes,
      },
      {
        name: "Object-Oriented Programming",
        icon: Package,
      },
      {
        name: "Database Management Systems",
        icon: Database,
      },
      {
        name: "Operating Systems",
        icon: MonitorCog,
      },
      {
        name: "Computer Networks",
        icon: Network,
      },
    ],
  },
];