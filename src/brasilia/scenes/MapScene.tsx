import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SceneShell, SceneHeading } from "../SceneShell";
import { THEMES, type SceneKey } from "../themes";

const NODES: { key: SceneKey; label: string; description: string }[] = [
  {
    key: "input",
    label: "Input",
    description: "Fragmented tickets, contracts and scattered docs",
  },
  {
    key: "processing",
    label: "Processing",
    description: "BOSSA — knowledge base, 3 agents, human review",
  },
  {
    key: "output",
    label: "Output",
    description: "Consistent, traceable, prioritized tax advice",
  },
];

export function MapScene({
  onNavigate,
}: {
  onNavigate: (key: SceneKey) => void;
}) {
  return (
    <SceneShell sceneKey="map">
      <div className="flex flex-1 flex-col items-center justify-center gap-12 px-8 py-12">
        <SceneHeading
          eyebrow="The flow"
          title="From raw tickets to consistent tax advice — at scale"
          subtitle="Click a stage to explore it."
        />
        <div className="flex w-full max-w-5xl flex-col items-stretch justify-center gap-4 md:flex-row md:items-center">
          {NODES.map((node, i) => {
            const theme = THEMES[node.key];
            return (
              <div
                key={node.key}
                className="flex flex-1 flex-col items-center gap-4 md:flex-row"
              >
                {i > 0 && (
                  <ArrowRight className="h-7 w-7 shrink-0 rotate-90 text-white/40 md:rotate-0" />
                )}
                <motion.button
                  type="button"
                  layoutId={`zoom-${node.key}`}
                  data-testid={`map-node-${node.key}`}
                  onClick={() => onNavigate(node.key)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex-1 border border-white/15 px-6 py-8 text-left backdrop-blur-sm transition-colors hover:border-white/40"
                  style={{
                    borderRadius: 24,
                    background: `radial-gradient(140% 140% at 50% 0%, ${theme.background[0]} 0%, ${theme.background[1]} 100%)`,
                  }}
                  transition={{
                    layout: { duration: 0.65, ease: [0.45, 0.05, 0.25, 1] },
                  }}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.25em]"
                    style={{ color: theme.particleColor }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-2 block text-2xl font-semibold text-white">
                    {node.label}
                  </span>
                  <span className="mt-2 block text-sm text-white/60">
                    {node.description}
                  </span>
                </motion.button>
              </div>
            );
          })}
        </div>
        <p className="text-xs uppercase tracking-[0.25em] text-white/40">
          One pipeline · every region · always reviewed by humans
        </p>
      </div>
    </SceneShell>
  );
}
