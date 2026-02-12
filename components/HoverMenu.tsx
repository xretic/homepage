"use client";

import { useMemo, useState } from "react";
import {
  IconButton,
  Popover,
  MenuList,
  MenuItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const buttonSx = {
  position: "absolute",
  color: "var(--text-color)",
  top: 20,
  right: 20,
  width: 40,
  height: 40,
  "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" },
} as const;

const iconSx = {
  position: "absolute",
  transition: "all 220ms ease",
  fontSize: 26,
} as const;

type Item = { label: string; href: string };

export function HoverMenu() {
  const items: Item[] = useMemo(
    () => [
      { label: "General", href: "#general" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Stack", href: "#stack" },
    ],
    [],
  );

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleGo = (href: string) => {
    handleClose();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = href;
  };

  return (
    <>
      <IconButton
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={open ? handleClose : handleOpen}
        sx={{
          ...buttonSx,
          position: "absolute",
          top: 20,
          right: 20,
          color: "var(--text-color)",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.1)",
          },
        }}
      >
        <MenuIcon
          sx={{
            ...iconSx,
            opacity: open ? 0 : 1,
            transform: open
              ? "rotate(-90deg) scale(0.9)"
              : "rotate(0) scale(1)",
          }}
        />

        <CloseIcon
          sx={{
            ...iconSx,
            opacity: open ? 1 : 0,
            transform: open ? "rotate(0) scale(1)" : "rotate(90deg) scale(0.9)",
          }}
        />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 200,
              borderRadius: 2,
              background: "rgba(0,0,0,0.55)",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(10px)",
              color: "white",
              overflow: "hidden",
            },
          },
        }}
      >
        <MenuList autoFocusItem>
          {items.map((x) => (
            <MenuItem
              key={x.href}
              onClick={() => handleGo(x.href)}
              sx={{
                py: 1.2,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
              }}
            >
              <ListItemText primary={x.label} />
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    </>
  );
}
