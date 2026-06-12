import { useEffect, useRef } from "react";
import type { ParticleTheme } from "./themes";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  /** Lattice "home" the particle converges toward when theme.convergence > 0. */
  hx: number;
  hy: number;
}

export function ParticleCanvas({ theme }: { theme: ParticleTheme }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let last = performance.now();
    let particles: Particle[] = [];

    const assignHomes = () => {
      const t = themeRef.current;
      const cols = Math.max(
        2,
        Math.round(Math.sqrt((t.particleCount * width) / Math.max(height, 1))),
      );
      const rows = Math.max(2, Math.ceil(t.particleCount / cols));
      particles.forEach((p, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols) % rows;
        p.hx = ((col + 0.5) / cols) * width;
        p.hy = ((row + 0.5) / rows) * height;
      });
    };

    const seed = () => {
      const t = themeRef.current;
      particles = Array.from({ length: t.particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() * 2 - 1) * t.velocitySpread,
        vy: (Math.random() * 2 - 1) * t.velocitySpread,
        hx: 0,
        hy: 0,
      }));
      assignHomes();
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const prevW = width;
      const prevH = height;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!particles.length) {
        seed();
      } else if (prevW > 0 && prevH > 0) {
        const sx = width / prevW;
        const sy = height / prevH;
        for (const p of particles) {
          p.x *= sx;
          p.y *= sy;
        }
        assignHomes();
      }
    };

    const tick = (now: number) => {
      const t = themeRef.current;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        if (t.convergence > 0) {
          p.vx += (p.hx - p.x) * t.convergence * 1.2 * dt;
          p.vy += (p.hy - p.y) * t.convergence * 1.2 * dt;
          const damp = 1 - Math.min(t.convergence * 2 * dt, 0.2);
          p.vx *= damp;
          p.vy *= damp;
        }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.x < 0) {
          p.x = 0;
          p.vx = Math.abs(p.vx);
        } else if (p.x > width) {
          p.x = width;
          p.vx = -Math.abs(p.vx);
        }
        if (p.y < 0) {
          p.y = 0;
          p.vy = Math.abs(p.vy);
        } else if (p.y > height) {
          p.y = height;
          p.vy = -Math.abs(p.vy);
        }
      }

      ctx.lineWidth = 1;
      ctx.strokeStyle = t.lineColor;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < t.linkDistance) {
            ctx.globalAlpha = (1 - dist / t.linkDistance) * 0.35;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 0.9;
      ctx.fillStyle = t.particleColor;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="particle-canvas"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
