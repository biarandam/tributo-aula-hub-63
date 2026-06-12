import { ArrowRight, Database, UserCheck, Users } from "lucide-react";
import { SceneShell, SceneHeading } from "../SceneShell";

const AGENTS = [
  {
    number: 1,
    title: "Data Extraction",
    text: "Extracts the facts, parties and amounts from tickets and source documents.",
  },
  {
    number: 2,
    title: "Tax Impact Triage",
    text: "Classifies tax impact and prioritizes against the three core risk themes.",
  },
  {
    number: 3,
    title: "Tax Analysis",
    text: "Drafts the tax analysis grounded in the standardized knowledge base.",
  },
];

function AgentCard({ number, title, text }: (typeof AGENTS)[number]) {
  return (
    <div
      data-testid="agent-card"
      className="flex-1 rounded-2xl border border-violet-300/20 bg-white/5 p-5 backdrop-blur-sm"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
        Agent {number}
      </span>
      <h3 className="mt-1.5 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-white/60">{text}</p>
    </div>
  );
}

function HumanCheckpoint() {
  return (
    <div
      data-testid="human-checkpoint"
      className="flex shrink-0 items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-3 py-2"
    >
      <UserCheck className="h-4 w-4 text-amber-300" />
      <span className="text-xs font-semibold uppercase tracking-wide text-amber-100">
        Human Review Checkpoint
      </span>
    </div>
  );
}

export function ProcessingScene() {
  return (
    <SceneShell sceneKey="processing" layoutId="zoom-processing">
      <div className="flex flex-1 flex-col items-center justify-center gap-8 px-8 pb-12 pt-24">
        <SceneHeading
          eyebrow="Processing · BOSSA"
          title="AI alone can't decide tax. Standardized knowledge can."
        />
        <div className="flex w-full max-w-5xl flex-col gap-4">
          <div className="flex items-center gap-3 rounded-2xl border border-violet-300/25 bg-violet-400/10 px-5 py-4">
            <Database className="h-5 w-5 shrink-0 text-violet-300" />
            <p className="text-sm text-white/80">
              <span className="font-semibold text-white">
                Standardized knowledge base
              </span>{" "}
              — tax positions, risk themes and precedents, encoded once and
              applied to every review.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
            <AgentCard {...AGENTS[0]} />
            <ArrowRight className="h-5 w-5 shrink-0 self-center rotate-90 text-white/35 lg:rotate-0" />
            <AgentCard {...AGENTS[1]} />
            <div className="flex shrink-0 flex-col items-center gap-3 lg:flex-row">
              <HumanCheckpoint />
              <ArrowRight className="h-5 w-5 shrink-0 rotate-90 text-white/35 lg:rotate-0" />
            </div>
            <AgentCard {...AGENTS[2]} />
            <div className="self-center">
              <HumanCheckpoint />
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-amber-300/25 bg-amber-400/5 px-5 py-4">
            <Users className="h-5 w-5 shrink-0 text-amber-300" />
            <p className="text-sm text-white/80">
              <span className="font-semibold text-white">Human-in-the-loop</span>{" "}
              — tax professionals review and approve every conclusion before it
              leaves the system.
            </p>
          </div>
        </div>
      </div>
    </SceneShell>
  );
}
