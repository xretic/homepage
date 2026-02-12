import styles from "./sections.module.css";
import HandymanIcon from "@mui/icons-material/Handyman";
import GridViewIcon from "@mui/icons-material/GridView";
import { TECH_STACK } from "@/lib/data";
import Link from "next/link";

const CATEGORIES = [
  { key: "FRONTEND", title: "FRONTEND", color: "#ff5a5f" },
  { key: "BACKEND", title: "BACKEND", color: "#7c6cff" },
  { key: "DATABASES", title: "DATABASES", color: "#f4b400" },
  { key: "LANGUAGES", title: "LANGUAGES", color: "#34a853" },
  { key: "TOOLS", title: "TOOLS", color: "#00bcd4" },
] as const;

export function Skills() {
  const grouped = TECH_STACK.reduce<Record<string, typeof TECH_STACK>>(
    (acc, item) => {
      (acc[item.type] ??= []).push(item);
      return acc;
    },
    {},
  );

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>
          <HandymanIcon sx={{ width: 32, height: 32, mr: 1 }} />
          Skills
        </h2>

        <div className={styles.skillsGrid}>
          {CATEGORIES.map((c) => (
            <SkillCategory key={c.key} title={c.title} color={c.color}>
              {(grouped[c.key] ?? []).map((x) => (
                <SkillItem key={`${c.key}-${x.name}`}>
                  <Link href={x.href} target="_blank">
                    {x.name}
                  </Link>
                </SkillItem>
              ))}
            </SkillCategory>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.skillCategory}>
      <h3 className={styles.skillTitle} style={{ color }}>
        <GridViewIcon /> {title}
      </h3>
      <div className={styles.skillItems}>{children}</div>
    </div>
  );
}

function SkillItem({ children }: { children: React.ReactNode }) {
  return <div className={styles.skillItem}>{children}</div>;
}
