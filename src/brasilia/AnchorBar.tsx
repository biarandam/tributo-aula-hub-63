import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SceneKey } from "./themes";

export type AnchorSegment = "input" | "processing" | "output";

/** Which I → P → O segment is highlighted on each scene that shows the bar. */
export const ANCHOR_SEGMENT: Partial<Record<SceneKey, AnchorSegment>> = {
  input: "input",
  processing: "processing",
  output: "output",
  scale: "output",
};

const SEGMENTS: { key: AnchorSegment; short: string; label: string }[] = [
  { key: "input", short: "I", label: "Input" },
  { key: "processing", short: "P", label: "Processing" },
  { key: "output", short: "O", label: "Output" },
];

export function AnchorBar({
  active,
  onNavigate,
}: {
  active: AnchorSegment;
  onNavigate: (key: SceneKey) => void;
}) {
  return (
    <div
      data-testid="nav-anchor"
      className="absolute left-1/2 top-5 z-30 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-md"
    >
      {SEGMENTS.map((segment, i) => (
        <Fragment key={segment.key}>
          {i > 0 && <ArrowRight className="h-3.5 w-3.5 text-white/30" />}
          <button
            type="button"
            data-testid={`nav-${segment.key}`}
            data-active={active === segment.key}
            onClick={() => onNavigate(segment.key)}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors",
              active === segment.key
                ? "bg-white text-black"
                : "text-white/55 hover:text-white",
            )}
          >
            <span className="md:hidden">{segment.short}</span>
            <span className="hidden md:inline">{segment.label}</span>
          </button>
        </Fragment>
      ))}
    </div>
  );
}
