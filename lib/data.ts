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
