import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { SceneShell } from "../SceneShell";

export function DemoScene() {
  return (
    <SceneShell sceneKey="demo">
      <div className="flex flex-1 flex-col items-center justify-center gap-8 px-8 py-12 text-center">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm"
        >
          <Play className="ml-1 h-8 w-8 text-white" />
        </motion.div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
            Live demonstration
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            See BOSSA live
          </h2>
          <p className="mt-4 text-base text-white/65 md:text-lg">
            From a real ticket to a reviewed tax analysis — in the live system.
          </p>
        </div>
        <p className="text-sm uppercase tracking-[0.25em] text-white/40">
          Switching to the live system →
        </p>
      </div>
    </SceneShell>
  );
}
