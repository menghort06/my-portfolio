import { NavItem } from "../types/types";

export const navItems: NavItem[] = [
  { id: "home", label: "Home", url: "/" },
  { id: "about", label: "About", url: "/about" },
  { id: "skill", label: "Skill", url: "/skill" },
  { id: "project", label: "Project", url: "/project" },
  { id: "experience", label: "Experience", url: '/experience' },
  // {
  //   id: "experience",
  //   label: "Experience",
  //   dropdown: [
  //     { label: "2018", name: "Intern", company: "Ecoinsoft" },
  //     { label: "2019", name: "Junior", company: "Ecoinsoft" },
  //     { label: "2020", name: "Developer", company: "Ecoinsoft" },
  //     { label: "2022", name: "Senior", company: "Ecoinsoft" },
  //     { label: "2023", name: "Lead - Now", company: "Ecoinsoft" },
  //   ],
  // },
  { id: "contact", label: "Contact", url: "/contact" },
];
