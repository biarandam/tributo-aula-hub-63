import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ParticleCanvas } from "./ParticleCanvas";
import { THEMES, type SceneKey } from "./themes";

interface SceneShellProps {
  sceneKey: SceneKey;
  /** Shared-layout id so map nodes can zoom-expand into this scene. */
  layoutId?: string;
  children: ReactNode;
}

export function SceneShell({ sceneKey, layoutId, children }: SceneShellProps) {
  const theme = THEMES[sceneKey];
  return (
    <motion.section
      data-testid={`scene-${sceneKey}`}
      layoutId={layoutId}
      className="absolute inset-0 overflow-hidden"
      style={{
        borderRadius: 0,
        background: `radial-gradient(120% 120% at 50% 15%, ${theme.background[0]} 0%, ${theme.background[1]} 100%)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.45, ease: "easeOut" },
        layout: { duration: 0.65, ease: [0.45, 0.05, 0.25, 1] },
      }}
    >
      <ParticleCanvas theme={theme} />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.section>
  );
}

export function SceneHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-3xl text-balance text-base text-white/65 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
