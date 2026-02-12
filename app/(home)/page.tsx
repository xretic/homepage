"use client";

import { StarsBackground } from "@/components/StarsBackground";
import TechCloud from "@/components/TechCloud";
import styles from "./home.module.css";
import { useTheme } from "@/lib/useTheme";
import { IconButton, SxProps, Theme } from "@mui/material";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MailIcon from "@mui/icons-material/Mail";
import { HoverMenu } from "@/components/HoverMenu";
import { About } from "@/components/sections/About";
import TerrainIcon from "@mui/icons-material/Terrain";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  const { theme, changeTheme } = useTheme();

  const iconSx: SxProps<Theme> = { color: "var(--text-color)" };
  const buttonSx: SxProps<Theme> = {
    transition: "transform 0.25s ease, background-color 0.25s ease",

    "&:hover": {
      backgroundColor: "rgba(var(--hl-rgb), 0.1)",
      transform: "translateY(-5px)",
    },
  };

  const themeIconSx: SxProps<Theme> = {
    position: "absolute",
    transition: "opacity 0.3s ease, transform 0.3s ease",
    ...iconSx,
  };

  const handleThemeChange = () => {
    if (theme === "dark") changeTheme("light");
    else changeTheme("dark");
  };

  return (
    <main className={styles.page}>
      <StarsBackground className={styles.bg} />

      <section className={styles.hero}>
        <HoverMenu />

        <div className={styles.heroGrid}>
          <div className={styles.left}>
            <TechCloud />
          </div>

          <div className={styles.right}>
            <div className={styles.pfInfo}>
              <Image
                src={"/images/Avatar.jpg"}
                alt="avatar"
                width={44}
                height={44}
                className={styles.avatar}
              />
              <div>
                <span className={styles.countryBadge}>
                  <TerrainIcon /> Czech Republic, Moravskoslezský kraj
                </span>
                <p className={styles.name}>
                  Hi, I'm Roman <span className={styles.wave}>👋</span>
                </p>
              </div>
            </div>

            <div className={styles.title}>
              <h1 className={styles.h1}>
                <span className={styles.hl}>FULLSTACK</span>
              </h1>
              <h1 className={styles.h1}>
                <span>DEVELOPER</span> &
              </h1>
              <h1 className={styles.h1}>
                <span className={styles.hl}>API</span> EXPERT
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.glass}>
        <IconButton
          component="a"
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=Collaboration&body=Hi Roman,`}
          sx={buttonSx}
        >
          <MailIcon sx={iconSx} />
        </IconButton>

        <IconButton
          component="a"
          href={process.env.NEXT_PUBLIC_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          sx={buttonSx}
        >
          <GitHubIcon sx={iconSx} />
        </IconButton>

        <IconButton
          component="a"
          href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          sx={buttonSx}
        >
          <LinkedInIcon sx={iconSx} />
        </IconButton>

        <IconButton
          onClick={handleThemeChange}
          sx={{
            position: "relative",
            width: 40,
            height: 40,
            ...buttonSx,
          }}
        >
          <LightModeIcon
            sx={{
              opacity: theme === "dark" ? 1 : 0,
              transform: theme === "dark" ? "rotate(0)" : "rotate(90deg)",
              ...themeIconSx,
            }}
          />
          <DarkModeIcon
            sx={{
              opacity: theme === "dark" ? 0 : 1,
              transform: theme === "dark" ? "rotate(-90deg)" : "rotate(0)",
              ...themeIconSx,
            }}
          />
        </IconButton>
      </div>

      <About />
      <Skills />
    </main>
  );
}
