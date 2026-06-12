import { AlertTriangle, FileText, Users } from "lucide-react";
import { SceneShell, SceneHeading } from "../SceneShell";

const PROBLEMS = [
  {
    icon: FileText,
    title: "Fragmented review",
    text: "Every ticket starts from scratch — outcomes depend on who reviews it.",
  },
  {
    icon: Users,
    title: "Siloed knowledge",
    text: "Expertise lives in a few people and scattered documents.",
  },
  {
    icon: AlertTriangle,
    title: "Avoidable exposure",
    text: "Inconsistent answers across regions become tax risk.",
  },
];

const TICKET_CATEGORIES = [
  "T01 · Pricing / Fares",
  "T02 · Uber Fees",
  "T03 · Promotions",
  "T04 · UX & Other",
];

const RISK_THEMES = ["Employment", "Transport Company", "Merchant / Reseller"];

export function InputScene() {
  return (
    <SceneShell sceneKey="input" layoutId="zoom-input">
      <div className="flex flex-1 flex-col items-center justify-center gap-10 px-8 pb-12 pt-24">
        <SceneHeading
          eyebrow="Input · The problem"
          title="Today, tax review doesn't scale — and that's a risk"
        />
        <div className="grid w-full max-w-5xl gap-4 md:grid-cols-3">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl border border-red-300/15 bg-white/5 p-6 backdrop-blur-sm"
            >
              <problem.icon className="h-6 w-6 text-red-300" />
              <h3 className="mt-3 text-lg font-semibold text-white">
                {problem.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                {problem.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex w-full max-w-5xl flex-col gap-3 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-white/40">
              Today's demand
            </span>
            {TICKET_CATEGORIES.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/70"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-white/40">
              Three core risk themes
            </span>
            {RISK_THEMES.map((theme) => (
              <span
                key={theme}
                className="rounded-full border border-red-300/30 bg-red-400/10 px-3 py-1 text-xs font-medium text-red-100"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SceneShell>
  );
}
