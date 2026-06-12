import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnchorBar, ANCHOR_SEGMENT } from "./AnchorBar";
import { SCENE_ORDER, type SceneKey } from "./themes";
import { CoverScene } from "./scenes/CoverScene";
import { MapScene } from "./scenes/MapScene";
import { InputScene } from "./scenes/InputScene";
import { ProcessingScene } from "./scenes/ProcessingScene";
import { OutputScene } from "./scenes/OutputScene";
import { ScaleScene } from "./scenes/ScaleScene";
import { DemoScene } from "./scenes/DemoScene";

export default function ProjectBrasilia() {
  const [index, setIndex] = useState(0);
  const scene = SCENE_ORDER[index];

  const goTo = useCallback((key: SceneKey) => {
    const target = SCENE_ORDER.indexOf(key);
    if (target >= 0) setIndex(target);
  }, []);

  const step = useCallback((delta: number) => {
    setIndex((i) => Math.min(Math.max(i + delta, 0), SCENE_ORDER.length - 1));
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      else if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [step]);

  const anchorSegment = ANCHOR_SEGMENT[scene];

  return (
    <div
      data-testid="project-brasilia"
      className="fixed inset-0 overflow-hidden bg-black font-sans text-white"
    >
      <AnimatePresence initial={false}>
        {scene === "cover" && <CoverScene key="cover" />}
        {scene === "map" && <MapScene key="map" onNavigate={goTo} />}
        {scene === "input" && <InputScene key="input" />}
        {scene === "processing" && <ProcessingScene key="processing" />}
        {scene === "output" && <OutputScene key="output" />}
        {scene === "scale" && <ScaleScene key="scale" />}
        {scene === "demo" && <DemoScene key="demo" />}
      </AnimatePresence>

      {anchorSegment && (
        <AnchorBar active={anchorSegment} onNavigate={goTo} />
      )}

      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4">
        <button
          type="button"
          aria-label="Previous scene"
          onClick={() => step(-1)}
          disabled={index === 0}
          className="rounded-full border border-white/15 bg-black/40 p-2 text-white/70 backdrop-blur-md transition-colors hover:text-white disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          {SCENE_ORDER.map((key, i) => (
            <button
              key={key}
              type="button"
              aria-label={`Go to scene: ${key}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index
                  ? "w-6 bg-white"
                  : "w-2 bg-white/30 hover:bg-white/60",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next scene"
          onClick={() => step(1)}
          disabled={index === SCENE_ORDER.length - 1}
          className="rounded-full border border-white/15 bg-black/40 p-2 text-white/70 backdrop-blur-md transition-colors hover:text-white disabled:opacity-30"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <p className="absolute bottom-6 right-6 z-30 hidden text-[11px] uppercase tracking-[0.2em] text-white/30 md:block">
        ← → to navigate
      </p>
    </div>
  );
}
