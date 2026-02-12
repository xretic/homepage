"use client";

import { TECH_STACK } from "@/lib/data";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";

export default function TechCloud() {
  const icons = TECH_STACK.map((stack) =>
    renderSimpleIcon({
      icon: stack.icon,
      size: 72,
      aProps: {
        href: stack.href,
        title: stack.name,
        target: "_blank",
        rel: "noreferrer noopener",
        style: { cursor: "pointer" },
      },
    }),
  );

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "520px",
        aspectRatio: "1",
        margin: "0 auto",
      }}
    >
      <Cloud
        options={{
          depth: 0.9,
          initial: [0.1, -0.1],

          clickToFront: 600,

          wheelZoom: false,
          outlineColour: "transparent",

          activeCursor: "pointer",
          outlineMethod: "size",

          outlineIncrease: 12,
          outlineOffset: 6,

          maxSpeed: 0.05,
          minSpeed: 0.03,

          freezeDecel: true,
        }}
      >
        {icons}
      </Cloud>
    </div>
  );
}
