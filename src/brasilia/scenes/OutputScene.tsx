import { Clock, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { SceneShell, SceneHeading } from "../SceneShell";

type Confidence = "illustrative" | "verified";

const METRICS: {
  icon: typeof Clock;
  value: string;
  label: string;
  confidence: Confidence;
}[] = [
  {
    icon: Clock,
    value: "−70%",
    label: "time-to-triage per ticket",
    confidence: "illustrative",
  },
  {
    icon: Sparkles,
    value: "12 h / week",
    label: "senior hours freed for strategic work",
    confidence: "illustrative",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "of reviews mapped to the three core risk themes",
    confidence: "illustrative",
  },
  {
    icon: TrendingUp,
    value: "4×",
    label: "ticket volume absorbed with the same team",
    confidence: "illustrative",
  },
];

export function OutputScene() {
  return (
    <SceneShell sceneKey="output" layoutId="zoom-output">
      <div className="flex flex-1 flex-col items-center justify-center gap-10 px-8 pb-12 pt-24">
        <SceneHeading
          eyebrow="Output · The result"
          title="Consistent, traceable, prioritized — every review, every region"
          subtitle="Same question, same answer — grounded in the knowledge base, with less hallucination and a full audit trail."
        />
        <div className="grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              data-testid="metric-stat"
              data-confidence={metric.confidence}
              className="relative flex flex-col gap-2 rounded-2xl border border-teal-300/20 bg-white/5 p-6 backdrop-blur-sm"
            >
              {metric.confidence !== "verified" && (
                <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/60">
                  illustrative
                </span>
              )}
              <metric.icon className="h-5 w-5 text-teal-300" />
              <span className="text-3xl font-semibold tracking-tight text-white">
                {metric.value}
              </span>
              <span className="text-sm leading-snug text-white/60">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
        <p className="max-w-3xl text-center text-xs text-white/45">
          Figures marked “illustrative” are placeholders and will be replaced
          with measured results before external use.
        </p>
      </div>
    </SceneShell>
  );
}
