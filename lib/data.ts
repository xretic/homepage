import type { SimpleIcon } from "simple-icons";
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siMui,
  siAntdesign,
  siShadcnui,
  siLucide,
  siCssmodules,
  siReactquery,
  siReacthookform,
  siZod,
  siPrisma,
  siRedis,
  siCookiecutter,
  siMongodb,
  siPostgresql,
  siTailwindcss,
  siNestjs,
  siMysql,
  siExpress,
  siVite,
  siJsonwebtokens,
  siPostman,
  siFormik,
  siRedux,
  siGit,
  siDrizzle,
} from "simple-icons";

type TechType = "FRONTEND" | "BACKEND" | "DATABASES" | "LANGUAGES" | "TOOLS";

type Tech = {
  name: string;
  href: string;
  icon: SimpleIcon;
  type: TechType;
};

export type Project = {
  title: string;
  description: string;
  href: string;
  source?: string;
  tags: string[];
  image?: string;
};

export type Review = {
  name: string;
  role?: string;
  company?: string;
  text: string;
};

export const TECH_STACK: Tech[] = [
  { name: "React", href: "https://react.dev", icon: siReact, type: "FRONTEND" },
  {
    name: "Next.js",
    href: "https://nextjs.org",
    icon: siNextdotjs,
    type: "FRONTEND",
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org",
    icon: siTypescript,
    type: "LANGUAGES",
  },
  { name: "Vite", href: "https://vitejs.dev", icon: siVite, type: "TOOLS" },
  { name: "MUI", href: "https://mui.com", icon: siMui, type: "FRONTEND" },
  {
    name: "Drizzle",
    href: "https://orm.drizzle.team/",
    icon: siDrizzle,
    type: "DATABASES",
  },
  {
    name: "Ant Design",
    href: "https://ant.design",
    icon: siAntdesign,
    type: "FRONTEND",
  },
  {
    name: "shadcn/ui",
    href: "https://ui.shadcn.com",
    icon: siShadcnui,
    type: "FRONTEND",
  },
  {
    name: "lucide-react",
    href: "https://lucide.dev",
    icon: siLucide,
    type: "FRONTEND",
  },
  {
    name: "Tailwind CSS",
    href: "https://tailwindcss.com",
    icon: siTailwindcss,
    type: "FRONTEND",
  },

  {
    name: "TanStack Query",
    href: "https://tanstack.com/query",
    icon: siReactquery,
    type: "FRONTEND",
  },
  {
    name: "Redux",
    href: "https://redux.js.org",
    icon: siRedux,
    type: "FRONTEND",
  },
  {
    name: "Formik",
    href: "https://formik.org",
    icon: siFormik,
    type: "FRONTEND",
  },
  {
    name: "react-hook-form",
    href: "https://react-hook-form.com",
    icon: siReacthookform,
    type: "FRONTEND",
  },
  { name: "zod", href: "https://zod.dev", icon: siZod, type: "FRONTEND" },

  {
    name: "Express",
    href: "https://expressjs.com",
    icon: siExpress,
    type: "BACKEND",
  },
  {
    name: "NestJS",
    href: "https://nestjs.com",
    icon: siNestjs,
    type: "BACKEND",
  },
  {
    name: "JWT",
    href: "https://jwt.io",
    icon: siJsonwebtokens,
    type: "BACKEND",
  },
  {
    name: "Cookies",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",
    icon: siCookiecutter,
    type: "BACKEND",
  },

  {
    name: "Prisma",
    href: "https://www.prisma.io",
    icon: siPrisma,
    type: "DATABASES",
  },
  { name: "Redis", href: "https://redis.io", icon: siRedis, type: "DATABASES" },
  {
    name: "MongoDB",
    href: "https://www.mongodb.com",
    icon: siMongodb,
    type: "DATABASES",
  },
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org",
    icon: siPostgresql,
    type: "DATABASES",
  },
  {
    name: "MySQL",
    href: "https://www.mysql.com",
    icon: siMysql,
    type: "DATABASES",
  },
  {
    name: "Postman",
    href: "https://www.postman.com",
    icon: siPostman,
    type: "TOOLS",
  },

  { name: "Git", href: "https://git-scm.com/", icon: siGit, type: "TOOLS" },
];

export const PROJECTS: Project[] = [
  {
    title: "Collectify",
    description:
      "Web app that allows users to build, manage, and share personal collections.",
    href: "https://collectify-corp.vercel.app/",
    source: "https://github.com/xretic/collectify",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "React",
      "Redis",
      "Tanstack-Query",
      "Antd",
      "MUI",
      "PostgreSQL",
    ],
    image: "/images/Collectify.png",
  },
  {
    title: "Homepage",
    description:
      "Personal developer portfolio built with Next.js and TypeScript. Features a modern UI powered by MUI, animated tech stack cloud using react-icon-cloud, theme switching, and responsive layout focused on performance and clean design.",
    href: "https://",
    source: "https://github.com/xretic/homepage",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "MUI",
      "react-icon-cloud",
      "react-fast-marquee",
    ],
    image: "/images/Homepage.png",
  },
  {
    title: "Antinuke bot",
    description:
      "Security-focused Discord bot designed to prevent destructive actions such as mass bans, channel deletions, and role abuse. Built with Discord.js and Discordx, it uses MongoDB (Mongoose) for persistent logging, cron for scheduled checks, and axios for external API integrations. Structured with a modular architecture for scalability and maintainability.",
    href: "https://github.com/xretic/antinuke-bot",
    tags: ["discord.js", "discordx", "mongoose", "cron", "axios", "moment"],
  },
  {
    title: "Giveaway bot",
    description:
      "Discord bot built with Discord.js and Discordx for managing automated giveaways. Supports scheduled events with cron, persistent storage via MongoDB (Mongoose), time handling with moment, and structured command architecture.",
    href: "https://github.com/xretic/giveaway-bot",
    tags: ["discord.js", "discordx", "mongoose", "cron", "moment"],
  },
  {
    title: "Todo bot",
    description:
      "Telegram bot built with Telegraf for managing personal tasks and reminders. Uses Prisma for database management, cron for scheduled notifications, and moment for time-based logic. Designed with clean command flow and scalable structure.",
    href: "https://github.com/xretic/todo-bot",
    tags: ["telegraf", "prisma", "cron", "moment"],
  },
];

export const REVIEWS: Review[] = [
  {
    name: "Petr K.",
    role: "HR",
    company: "TP system a.s.",
    text: "Komunikace byla rychlá a věcná. Roman byl připravený, ptal se na správné věci a působil profesionálně.",
  },
  {
    name: "Natalie M.",
    role: "Recruiter",
    company: "Startup",
    text: "Super zkušenost. Jasně vysvětlil svůj přístup k UI a rychle navrhl realistický postup práce.",
  },
  {
    name: "Ivo J.",
    role: "Tech Lead",
    company: "TP system a.s.",
    text: "silný frontend základ, dobré myšlení nad architekturou komponent a čistota kódu.",
  },
  {
    name: "Martin M.",
    role: "Engineer",
    company: "TP system a.s.",
    text: "Příjemná spolupráce, umí argumentovat rozhodnutí, a hlavně dotahuje věci do konce.",
  },
  {
    name: "Client (MVP)",
    role: "Founder",
    company: "",
    text: "Rychle pochopil požadavky, navrhl UI varianty a dodal funkční část bez zbytečných iterací.",
  },
  {
    name: "Michael T.",
    role: "Product Manager",
    company: "SaaS Platform",
    text: "Roman quickly understood the business context and translated it into a clean, scalable UI. Reliable and detail-oriented.",
  },
  {
    name: "Emma L.",
    role: "Founder",
    company: "Early-stage Startup",
    text: "Very structured approach. He proposed better UX improvements than initially planned and delivered on time.",
  },
  {
    name: "Daniel R.",
    role: "Fullstack Developer",
    company: "",
    text: "Strong API understanding and solid component architecture. Code is clean and easy to maintain.",
  },
  {
    name: "Андрій К.",
    role: "CTO",
    company: "Tech Company",
    text: "Швидко розібрався в архітектурі проєкту, запропонував оптимальні рішення та працював без зайвих затримок.",
  },
  {
    name: "Олена П.",
    role: "Product Owner",
    company: "",
    text: "Відповідальний та структурований підхід. Добре комунікує і тримає фокус на результаті.",
  },
  {
    name: "Сергій М.",
    role: "Frontend Developer",
    company: "",
    text: "Гарне розуміння сучасного стеку, чистий код і продумана структура компонентів.",
  },
];
