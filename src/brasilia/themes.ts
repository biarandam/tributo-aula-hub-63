export type SceneKey =
  | "cover"
  | "map"
  | "input"
  | "processing"
  | "output"
  | "scale"
  | "demo";

export const SCENE_ORDER: SceneKey[] = [
  "cover",
  "map",
  "input",
  "processing",
  "output",
  "scale",
  "demo",
];

export interface ParticleTheme {
  /** Radial gradient [inner, outer] used as the scene background. */
  background: [string, string];
  particleColor: string;
  lineColor: string;
  particleCount: number;
  /** Max initial speed (px/s). High = chaotic, low = calm. */
  velocitySpread: number;
  /** Max distance (px) at which two particles get a connecting line. High = denser graph. */
  linkDistance: number;
  /** 0 = free drift, 1 = strong pull toward a structured lattice. */
  convergence: number;
}

/**
 * Visual entropy decreases across the story: `input` is scattered
 * (high velocitySpread, low linkDistance, no convergence) while `output`
 * is convergent and structured (low velocitySpread, high linkDistance,
 * strong convergence).
 */
export const THEMES: Record<SceneKey, ParticleTheme> = {
  cover: {
    background: ["#06281f", "#020a08"],
    particleColor: "#34d399",
    lineColor: "#10b981",
    particleCount: 90,
    velocitySpread: 18,
    linkDistance: 110,
    convergence: 0.2,
  },
  map: {
    background: ["#0b2545", "#020617"],
    particleColor: "#60a5fa",
    lineColor: "#3b82f6",
    particleCount: 100,
    velocitySpread: 22,
    linkDistance: 120,
    convergence: 0.3,
  },
  input: {
    background: ["#3b0d0d", "#0b0303"],
    particleColor: "#f87171",
    lineColor: "#ef4444",
    particleCount: 140,
    velocitySpread: 60,
    linkDistance: 70,
    convergence: 0,
  },
  processing: {
    background: ["#2a1252", "#070213"],
    particleColor: "#a78bfa",
    lineColor: "#8b5cf6",
    particleCount: 110,
    velocitySpread: 30,
    linkDistance: 110,
    convergence: 0.45,
  },
  output: {
    background: ["#042f2e", "#020c0c"],
    particleColor: "#2dd4bf",
    lineColor: "#14b8a6",
    particleCount: 110,
    velocitySpread: 10,
    linkDistance: 160,
    convergence: 0.9,
  },
  scale: {
    background: ["#3a2a05", "#0d0902"],
    particleColor: "#fbbf24",
    lineColor: "#f59e0b",
    particleCount: 100,
    velocitySpread: 16,
    linkDistance: 140,
    convergence: 0.7,
  },
  demo: {
    background: ["#1f2937", "#030712"],
    particleColor: "#e5e7eb",
    lineColor: "#9ca3af",
    particleCount: 80,
    velocitySpread: 14,
    linkDistance: 130,
    convergence: 0.5,
  },
};
