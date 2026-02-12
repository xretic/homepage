import styles from "./sections.module.css";
import GridViewIcon from "@mui/icons-material/GridView";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import { Project, PROJECTS } from "@/lib/data";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.projectCard}>
      {project.image && (
        <div className={styles.projectMedia}>
          <img
            className={styles.projectImg}
            src={project.image}
            alt={project.title}
            loading="lazy"
          />
        </div>
      )}

      <div className={styles.projectBody}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDesc}>{project.description}</p>

        <div className={styles.projectTags}>
          {project.tags.map((t) => (
            <span key={t} className={styles.projectTag}>
              {t}
            </span>
          ))}
        </div>

        <div className={styles.projectActions}>
          <a
            className={styles.projectBtn}
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            <LaunchIcon sx={{ width: 18, height: 18 }} />
            Visit
          </a>

          {project.source ? (
            <a
              className={`${styles.projectBtn} ${styles.projectBtnSecondary}`}
              href={project.source}
              target="_blank"
              rel="noreferrer"
            >
              <CodeIcon sx={{ width: 18, height: 18 }} />
              Source
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>
          <GridViewIcon sx={{ width: 32, height: 32, marginRight: 1 }} />
          Projects
        </h2>

        <div className={styles.projectsGrid}>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
