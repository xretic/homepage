"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  density?: number;
  speed?: number;
};

type Star = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  a: number;
  tw: number;
  phase: number;
};

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function cssVar(name: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

function parseRgba(v: string, fallback: string) {
  return v || fallback;
}

export function StarsBackground({
  className,
  density = 0.00012,
  speed = 0.18,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const dprRef = useRef(1);

  const sizeRef = useRef({ w: 0, h: 0 });

  const themeRef = useRef({
    bg: "#1b1f3b",
    glow1: "rgba(120, 150, 248, 0.12)",
    glow2: "rgba(72, 138, 236, 0.08)",
    star: "rgba(255,255,255,1)",
    shadow: "rgba(255,255,255,0.55)",
  });

  useEffect(() => {
    const readTheme = () => {
      themeRef.current = {
        bg: parseRgba(cssVar("--stars-bg"), "#1b1f3b"),
        glow1: parseRgba(cssVar("--stars-glow-1"), "rgba(120, 150, 248, 0.12)"),
        glow2: parseRgba(cssVar("--stars-glow-2"), "rgba(72, 138, 236, 0.08)"),
        star: parseRgba(cssVar("--stars-color"), "rgba(255,255,255,1)"),
        shadow: parseRgba(cssVar("--stars-shadow"), "rgba(255,255,255,0.55)"),
      };
    };

    readTheme();

    const mo = new MutationObserver(readTheme);
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });
    return () => mo.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;

    const getViewportSize = () => {
      const vv = window.visualViewport;
      const w = Math.floor((vv?.width ?? window.innerWidth) || 0);
      const h = Math.floor((vv?.height ?? window.innerHeight) || 0);
      return { w, h };
    };

    const rebuildStars = (wPx: number, hPx: number, dpr: number) => {
      const area = wPx * hPx;
      const count = Math.max(70, Math.floor(area * density));

      const stars: Star[] = [];
      for (let i = 0; i < count; i++) {
        const r = rand(0.6, 2.2) * dpr;
        const base = rand(0.18, 0.75);
        stars.push({
          x: rand(0, wPx),
          y: rand(0, hPx),
          r,
          vx: rand(-0.25, 0.25) * dpr,
          vy: rand(0.15, 0.55) * dpr,
          a: base,
          tw: rand(0.6, 1.6),
          phase: rand(0, Math.PI * 2),
        });
      }
      starsRef.current = stars;
    };

    const resize = (force = false) => {
      const { w, h } = getViewportSize();
      if (!w || !h) return;

      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      dprRef.current = dpr;

      const nextW = Math.floor(w * dpr);
      const nextH = Math.floor(h * dpr);

      const prev = sizeRef.current;

      const heightDelta = Math.abs(prev.h - nextH);
      const widthDelta = Math.abs(prev.w - nextW);

      if (!force) {
        if (widthDelta === 0 && heightDelta < 80 * dpr) return;
      }

      sizeRef.current = { w: nextW, h: nextH };

      canvas.width = nextW;
      canvas.height = nextH;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      rebuildStars(nextW, nextH, dpr);
    };

    const draw = (t: number) => {
      const w = canvas.width;
      const h = canvas.height;
      const dpr = dprRef.current;
      const theme = themeRef.current;

      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = theme.bg;
      ctx.fillRect(0, 0, w, h);

      const grad = ctx.createRadialGradient(
        w * 0.55,
        h * 0.35,
        0,
        w * 0.55,
        h * 0.35,
        Math.max(w, h) * 0.7,
      );
      grad.addColorStop(0, theme.glow1);
      grad.addColorStop(0.45, theme.glow2);
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      const stars = starsRef.current;
      const time = t * 0.001;

      ctx.save();
      ctx.fillStyle = theme.star;

      for (const s of stars) {
        const tw = prefersReduced ? 0 : Math.sin(time * s.tw + s.phase) * 0.22;
        const alpha = Math.max(0.06, Math.min(0.95, s.a + tw));

        ctx.globalAlpha = alpha;

        if (s.r > 1.6 * dpr) {
          ctx.shadowBlur = 10 * dpr;
          ctx.shadowColor = theme.shadow;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        if (!prefersReduced) {
          s.x += s.vx * speed;
          s.y += s.vy * speed;

          if (s.y - s.r > h) s.y = -s.r;
          if (s.x + s.r < 0) s.x = w + s.r;
          if (s.x - s.r > w) s.x = -s.r;
        }
      }

      ctx.restore();
      rafRef.current = requestAnimationFrame(draw);
    };

    resize(true);

    let resizeRaf: number | null = null;
    const onResize = () => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => resize(false));
    };

    window.addEventListener("resize", onResize, { passive: true });
    window.visualViewport?.addEventListener("resize", onResize, {
      passive: true,
    });

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [density, speed]);

  return (
    <div className={`space ${className ?? ""}`}>
      <canvas ref={canvasRef} className="canvas" aria-hidden="true" />
    </div>
  );
}
