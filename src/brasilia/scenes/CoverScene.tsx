import { useState } from "react";
import { motion } from "framer-motion";
import { SceneShell } from "../SceneShell";

const TEAM = [
  { name: "Carolina", role: "Tax Manager", photo: "team/carolina.jpg" },
  { name: "Victoria", role: "Sr Tax Counsel", photo: "team/victoria.jpg" },
  { name: "Bianca", role: "Tax Counsel", photo: "team/bianca.jpg" },
];

function TeamCard({ name, role, photo }: (typeof TEAM)[number]) {
  // Photos are pending delivery; fall back to initials until they land in public/team/.
  const [photoFailed, setPhotoFailed] = useState(false);
  return (
    <div
      data-testid="team-card"
      className="flex w-44 flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-sm md:w-52"
    >
      <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-emerald-300/30 bg-emerald-400/10">
        {photoFailed ? (
          <span className="text-2xl font-semibold text-emerald-200">
            {name.charAt(0)}
          </span>
        ) : (
          <img
            src={`${import.meta.env.BASE_URL}${photo}`}
            alt={name}
            className="h-full w-full object-cover"
            onError={() => setPhotoFailed(true)}
          />
        )}
      </div>
      <div className="text-center">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-white/60">{role}</p>
      </div>
    </div>
  );
}

export function CoverScene() {
  return (
    <SceneShell sceneKey="cover">
      <div className="flex flex-1 flex-col items-center justify-center px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300/80">
            Global Tax Planning &amp; Strategy
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Project Brasília
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 md:text-xl">
            BOSSA — Brasília Optimized Smart System Agents
          </p>
          <p className="mt-2 text-sm text-white/55 md:text-base">
            A multi-agent tax review system. Built, running, and ready to scale.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          {TEAM.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </motion.div>
      </div>
    </SceneShell>
  );
}
