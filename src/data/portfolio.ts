// All portfolio content lives here. Edit this file to update the site.
import type { IconType } from "react-icons";
import {
  SiBitbucket,
  SiClaude,
  SiCss,
  SiCursor,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
} from "react-icons/si";
import {
  FaCalendarDays,
  FaCampground,
  FaChartLine,
  FaChildReaching,
  FaClock,
  FaCloud,
  FaCoins,
  FaFileInvoiceDollar,
  FaGamepad,
  FaGavel,
  FaReceipt,
  FaServer,
  FaShieldHalved,
  FaTrophy,
  FaUsers,
} from "react-icons/fa6";

export const profile = {
  name: "Maitri Diwan",
  firstName: "Maitri",
  title: "Full Stack Developer",
  roles: ["Full Stack Developer", "AI-Assisted Builder"],
  tagline:
    "I build fast, scalable web apps with React, Next.js, Node.js, MongoDB and PostgreSQL, and use AI tools like Claude, Cursor and GitHub Copilot to ship faster.",
  locations: ["Ahmedabad", "Pune", "Bangalore"],
  email: "maitridiwan19@gmail.com",
  // Google Calendar appointment schedule (embed form of https://calendar.app.google/jMsBKMTGb5LGXdAv9)
  bookingUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Ewcf0yVp70GDecZVFYXTnO5pxZsfxOw78hUTyLDOuT5sf1RCta5k_AtYfR5YUVB1rVepWGxxy?gv=true",
    // Put your resume at public/resume.pdf, or paste a Google Drive link here.
  resumeUrl: "/Maitri_Resume.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/maitri-diwan-7a8762226",
    github: "https://github.com/MAITRI-DIWAN",
  },
};

export const aboutHeading = "I am a Full Stack Developer & AI enthusiast";

export const about = [
  "For the past 2 years I've been building software that real businesses run on: live auctions where every bid lands instantly, game servers spun up at the click of a button, and expense claims that flow straight into SAP. I love owning a feature end to end, from a polished React or Next.js interface, through clean Node.js and Express APIs, down to the MongoDB or PostgreSQL schema underneath.",
  "I use AI tools like Claude, Cursor and GitHub Copilot every day to prototype quickly, refactor safely and spend more time on the problems that matter, without cutting corners on code quality.",
];

export const stats = [
  { value: 2, suffix: "+", label: "Years of experience" },
  { value: 4, suffix: "+", label: "Projects completed" },
  { value: 8, suffix: "", label: "Core technologies" },
  { value: 3000, suffix: "+", label: "Hours of development" },
];

export type Skill = { name: string; icon: IconType; color: string };

export const skillGroups: { group: string; items: Skill[] }[] = [
  {
    group: "Frontend",
    items: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#663399" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    ],
  },
  {
    group: "Backend & Database",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    group: "Version Control",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Bitbucket", icon: SiBitbucket, color: "#2684FF" },
    ],
  },
  {
    group: "AI Tools",
    items: [
      { name: "Claude", icon: SiClaude, color: "#D97757" },
      { name: "Cursor", icon: SiCursor, color: "#FFFFFF" },
      { name: "GitHub Copilot", icon: SiGithubcopilot, color: "#FFFFFF" },
    ],
  },
];

export type Project = {
  name: string;
  category: string;
  icon: IconType;
  decor: IconType[]; // small floating icons around the main one
  colors: [string, string]; // gradient for the project visual
  summary: string;
  features: string[];
  stack: string[];
  live?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    name: "Rolling Arrays – Reimburse",
    category: "Enterprise · Fintech",
    icon: FaFileInvoiceDollar,
    decor: [FaReceipt, FaCoins, FaChartLine],
    colors: ["#10b981", "#0ea5e9"],
    summary:
      "Enterprise expense reimbursement and claims platform integrated with SAP, covering claim creation, approvals, audit logging and reporting across tenants and currencies.",
    features: [
      "Fixed bugs in split expense flows and foreign currency precision",
      "Resolved approval remarks issues across approval and request flows",
      "Fixed configuration and UI issues across the platform",
    ],
    stack: ["React.js", "Python"],
  },
  {
    name: "Iceline Hosting",
    category: "Cloud · Gaming",
    icon: FaServer,
    decor: [FaGamepad, FaCloud, FaShieldHalved],
    colors: ["#3b82f6", "#06b6d4"],
    summary:
      "Game-server hosting platform built on a microservices architecture (auth, gs-manager, fs-manager).",
    features: [
      "Developed core UI and handled API integration",
      "Worked in a 3-member team on game-server integration and file-server manager services",
      "Managed role-based access control and direct client communication",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Golang", "PostgreSQL", "Nomad", "Consul", "MinIO", "Amazon S3"],
  },
  {
    name: "Kidzcamp",
    category: "Marketplace · Admin panel",
    icon: FaCampground,
    decor: [FaChildReaching, FaCalendarDays, FaUsers],
    colors: ["#f59e0b", "#ec4899"],
    summary:
      "Centralized admin panel for a multi-vendor kids activity marketplace, managing vendors, events, bookings and payments.",
    features: [
      "Role-based dashboard with access control",
      "Multi-step form workflows and REST API integration",
      "Media uploads via Cloudinary and AWS S3",
    ],
    stack: ["React.js", "Express.js", "Redux Toolkit", "MUI", "Cloudinary", "MongoDB"],
  },
  {
    name: "Bacancy Auction",
    category: "Real-time · Bidding",
    icon: FaGavel,
    decor: [FaTrophy, FaClock, FaCoins],
    colors: ["#8b5cf6", "#f43f5e"],
    summary:
      "Responsive, real-time auction platform where users create, manage and bid on live auction events with instant updates.",
    features: [
      "Real-time bidding with instant updates on live auction events",
      "REST API integration with Redux Toolkit for state management",
      "Reusable components, authentication and protected routes",
    ],
    stack: ["React.js", "TypeScript", "Redux Toolkit", "MUI", "Node.js", "Express.js", "PostgreSQL", "REST APIs"],
  },
];
