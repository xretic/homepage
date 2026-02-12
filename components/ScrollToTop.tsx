"use client";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "../app/(home)/home.module.css";

export function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <IconButton
      onClick={scrollToTop}
      className={`${styles.scrollTopBtn} ${
        showScrollTop ? styles.scrollTopBtnVisible : ""
      }`}
      aria-label="Scroll to top"
      sx={{
        transition: "transform 0.25s ease, background-color 0.25s ease",
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
        width: 50,
        height: 50,
        backgroundColor: "rgba(var(--stars-color), 0.2)",
        backdropFilter: "blur(10px)",
      }}
    >
      <KeyboardArrowUpIcon sx={{ color: "var(--text-color)" }} />
    </IconButton>
  );
}
