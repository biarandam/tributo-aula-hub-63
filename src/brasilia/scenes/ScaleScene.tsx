import { Database, Globe, UserCheck } from "lucide-react";
import { SceneShell, SceneHeading } from "../SceneShell";

const PILLARS = [
  {
    icon: Database,
    title: "The knowledge base is the moat",
    text: "Agents are swappable. Encoded tax positions compound in value with every review.",
  },
  {
    icon: Globe,
    title: "Replicable by design",
    text: "A new region means a new knowledge pack — the pipeline stays the same.",
  },
  {
    icon: UserCheck,
    title: "Governed by humans",
    text: "Every conclusion is reviewed, every source is traceable. Governance is built in.",
  },
];

const ASKS = [
  "Sponsorship to pilot a second region",
  "Access to regional tax documentation",
  "A shared standard for encoding tax positions",
];

export function ScaleScene() {
  return (
    <SceneShell sceneKey="scale">
      <div className="flex flex-1 flex-col items-center justify-center gap-10 px-8 pb-12 pt-24">
        <SceneHeading
          eyebrow="Beyond Brazil"
          title="The asset isn't the AI. It's the standardized tax knowledge."
        />
        <div className="grid w-full max-w-5xl gap-4 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-amber-300/20 bg-white/5 p-6 backdrop-blur-sm"
            >
              <pillar.icon className="h-6 w-6 text-amber-300" />
              <h3 className="mt-3 text-lg font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full max-w-5xl rounded-2xl border border-white/15 bg-black/30 px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300/90">
            Where we need your support
          </p>
          <ul className="mt-3 flex flex-col gap-2 md:flex-row md:gap-8">
            {ASKS.map((ask) => (
              <li key={ask} className="flex items-center gap-2 text-sm text-white/75">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                {ask}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SceneShell>
  );
}
