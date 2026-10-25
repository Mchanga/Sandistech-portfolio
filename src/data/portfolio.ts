import newsPreview from "../assets/sandistech-news-preview.jpg";
import yazohPreview from "../assets/yazoh-graphx-preview.jpg";
import safariPreview from "../assets/safari-explorer-preview.jpg";
import type { IconType } from "react-icons";
import { FaMountain, FaPalette } from "react-icons/fa";

export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  description: string;
  context: string;
  focus: string;
  approach: string;
  technologies: string[];
  url: string;
  visual: "news" | "studio" | "safari";
  image?: string;
  icon?: IconType;
  status?: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: "sandistech-news",
    name: "Sandistech News",
    category: "News platform · Full-stack",
    description:
      "A responsive platform for reading, publishing, and managing news content.",
    context:
      "News readers and publishers need a clear digital home for discovering stories and managing editorial content.",
    focus:
      "Bring news discovery, publishing, and content management together in one responsive platform.",
    approach:
      "The published project presents news content through a responsive interface and supports content publishing and management.",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    url: "https://sandistech-news.onrender.com/",
    visual: "news",
    image: newsPreview,
  },
  {
    slug: "yazoh-graphx",
    name: "Yazoh Graphx",
    category: "Creative studio · Brand website",
    description:
      "A digital showcase for a Dar es Salaam creative studio working across graphic design, motion graphics, branding, and video.",
    context:
      "Yazoh Graphx offers multiple creative services and needs a digital presence that brings its work and offer together.",
    focus:
      "Present the studio and its graphic design, motion, branding, and video services in one place.",
    approach:
      "The live website introduces the creative studio and its range of services through a dedicated digital showcase.",
    technologies: ["Graphic design", "Motion graphics", "Branding"],
    url: "https://yazoh-graphx.onrender.com",
    visual: "studio",
    image: yazohPreview,
    icon: FaPalette,
  },
  {
    slug: "safari-explorer-tanzania",
    name: "Safari Explorer Tanzania",
    category: "Travel · Destination website",
    description:
      "An in-progress website for presenting safari destinations and wildlife experiences across Tanzania.",
    context:
      "The project focuses on introducing Tanzania safari destinations and wildlife experiences to prospective visitors.",
    focus:
      "Create a digital experience for exploring safari destinations and wildlife adventures.",
    approach:
      "The project is currently in progress; further case-study details will be added as the work develops.",
    technologies: ["Safari", "Wildlife", "Tanzania"],
    url: "https://safari-explorer-tanzania.onrender.com/",
    visual: "safari",
    image: safariPreview,
    icon: FaMountain,
    status: "In progress",
  },
];

export const capabilities = [
  {
    number: "01",
    title: "Web development",
    description:
      "Responsive websites and web applications built with modern tools and a focus on usability.",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS"],
    example: "Sandistech News",
  },
  {
    number: "02",
    title: "Full-stack development",
    description:
      "Frontends connected to the application logic, data, and real-time features behind them.",
    skills: ["Django", "Node.js", "PostgreSQL", "Socket.IO"],
    example: "Sandistech News",
  },
  {
    number: "03",
    title: "Build & delivery",
    description:
      "A practical workflow for versioning, collaborating on, and packaging software projects.",
    skills: ["Git", "GitHub", "Docker"],
    example: "Project workflow",
  },
];

export const profile = {
  name: "Paschal Masanja",
  role: "Software developer",
  location: "Tanzania, East Africa",
  email: "paschalmasanja303@gmail.com",
  phone: "+255 764 069 290",
  phoneLink: "255764069290",
  github: "https://github.com/Mchanga",
  education: "Bachelor's degree in Computer Science",
};
