"use client";

import { useTheme } from "@/lib/useTheme";
import { ReactNode, useEffect, useState } from "react";

type Props = { children: ReactNode };

export default function ThemeProvider({ children }: Props) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  if (!mounted) return null;

  return <>{children}</>;
}
