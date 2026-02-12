"use client";

import Marquee from "react-fast-marquee";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import styles from "./sections.module.css";
import { Review, REVIEWS } from "@/lib/data";

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewTop}>
        <FormatQuoteIcon sx={{ width: 22, height: 22, opacity: 0.9 }} />
        <div className={styles.reviewMeta}>
          <p className={styles.reviewName}>{r.name}</p>
          {(r.role || r.company) && (
            <p className={styles.reviewRole}>
              {[r.role, r.company].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>
      </div>

      <p className={styles.reviewText}>{r.text}</p>
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>Reviews</h2>

        <div className={styles.reviewsWrap}>
          <Marquee pauseOnHover pauseOnClick speed={80}>
            {REVIEWS.map((r, idx) => (
              <div className={styles.reviewSlide} key={`${r.name}-${idx}`}>
                <ReviewCard r={r} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
