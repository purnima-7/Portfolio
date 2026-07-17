export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  {
    id: "about",
    label: "About",
    href: "#about",
  },
  {
    id: "skills",
    label: "Skills",
    href: "#skills",
  },
  {
    id: "experience",
    label: "Experience",
    href: "#experience",
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
  },
  {
    id: "leadership",
    label: "Leadership",
    href: "#leadership",
  },
  {
    id: "achievements",
    label: "Achievements",
    href: "#achievements",
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
  },
];