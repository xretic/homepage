import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import styles from "./sections.module.css";

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>
          <BubbleChartIcon sx={{ width: 40, height: 40, marginRight: 0.3 }} />
          About
        </h2>

        <div className={styles.sectionText}>
          <p>
            I’m{" "}
            <a href="#" className={styles.sectionLink}>
              Roman
            </a>
            , a full-stack developer focused on building clean, fast products
            with a strong backend and crisp UI. I work mainly with{" "}
            <a href="#" className={styles.sectionLink}>
              TypeScript
            </a>{" "}
            and{" "}
            <a href="#" className={styles.sectionLink}>
              Next.js
            </a>
            .
          </p>

          <p>
            I like shipping end-to-end features, writing reliable code, and
            keeping codebases simple. Recently I’ve been building apps with
            React Query, Prisma and Redis caching.
          </p>

          <p>
            Currently, I’m open to a{" "}
            <span className={styles.sectionEm}>full-stack web developer</span>{" "}
            role where I can grow and build useful software.
          </p>

          <p className={styles.sectionCtaLine}>
            Let’s build something great! ✨
          </p>
        </div>
      </div>
    </section>
  );
}
