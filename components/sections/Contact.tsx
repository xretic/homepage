import SendIcon from "@mui/icons-material/Send";
import styles from "./sections.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>
          <SendIcon sx={{ width: 35, height: 35, marginRight: 1 }} />
          Contact
        </h2>

        <div className={styles.sectionTextLast}>
          <p className={styles.sectionText}>
            Any questions? Feel free to contact me by email{" "}
            <span className={styles.sectionEm}>
              {process.env.NEXT_PUBLIC_EMAIL}
            </span>{" "}
            or on <span className={styles.sectionEm}>LinkedIn</span>.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
