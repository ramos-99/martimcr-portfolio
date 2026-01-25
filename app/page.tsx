"use client";

import KernelVisualizer from "@/components/KernelVisualizer";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [typedName, setTypedName] = useState("");
  const name = "Martim C. Ramos";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedName((prev) => name.slice(0, index + 1));
      index++;
      if (index === name.length) clearInterval(interval);
    }, 200); // Typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex min-h-screen w-screen flex-col overflow-y-auto lg:overflow-hidden bg-neutral-950 selection:bg-emerald-900/30 selection:text-emerald-200">
      {/* Carbon Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-carbon mix-blend-overlay"></div>

      {/* Radial Gradient for Depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-900/30 via-neutral-950/0 to-neutral-950/80 pointer-events-none"></div>

      {/* Background Visualizer */}
      <KernelVisualizer />

      {/* Main Layout */}
      <div className="relative z-10 flex h-full flex-grow flex-col lg:flex-row max-w-7xl mx-auto w-full px-6 lg:px-12 py-12 lg:py-0 pointer-events-auto">

        {/* Left Column (Identity) - 40% on Desktop - MAIN FOCUS */}
        <div className="flex flex-col justify-center lg:w-[40%] lg:h-screen space-y-8 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Identity Group */}
            <div className="space-y-6">

              {/* Avatar + Typewriter Name Row */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 text-center sm:text-left">
                {/* Avatar (Bigger with Emerald Glow) */}
                <div className="relative h-28 w-28 shrink-0">
                  <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl"></div>
                  <div className="relative h-full w-full overflow-hidden rounded-full border border-zinc-800 shadow-2xl">
                    <Image
                      src="/avatar.jpg"
                      alt="Martim C. Ramos"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Typewriter Name (Bigger) */}
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white font-[family-name:var(--font-space)] min-h-[1.1em]">
                  {typedName}
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="ml-1 text-emerald-500 inline-block w-2 bg-emerald-500 h-[0.8em] align-middle"
                  />
                </h1>
              </div>

              {/* Subtitle (Inline) */}
              <h2 className="text-xl sm:text-2xl text-zinc-300 font-mono tracking-tight text-center sm:text-left">
                Computer Engineering Student <span className="text-zinc-500 ml-2 block sm:inline">@ Técnico (IST)</span>
              </h2>
            </div>

            {/* Refined Bio - Professional with Emerald Accents */}
            <p className="text-zinc-400 max-w-lg text-xl leading-relaxed font-light text-center sm:text-left mx-auto sm:mx-0">
              My academic focus is grounded in engineering fundamentals, with a deep active interest in <span className="text-emerald-400 font-medium">Linux Kernel development</span>, <span className="text-emerald-400 font-medium">Low-Level Security</span>, <span className="text-emerald-400 font-medium">AI</span>, and <span className="text-emerald-400 font-medium">Automation</span>.
            </p>

            {/* Social Icons - Clean Row (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-10 pt-4">
              <a
                href="https://github.com/ramos-99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-emerald-400 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-emerald-400 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:martimcr@gmail.com"
                className="text-zinc-400 hover:text-emerald-400 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>

            {/* Tech Stack Marquee - Static Bottom (Desktop) */}
            <div className="hidden lg:block pt-8 lg:pt-16 opacity-60 text-xs font-mono text-emerald-500/60 tracking-widest uppercase">
              C • Linux
            </div>

          </motion.div>
        </div>

        {/* Right Column (Visualizer & Widget) - 60% on Desktop */}
        <div className="relative flex flex-col justify-start lg:justify-center lg:items-end lg:w-[60%] lg:h-screen pb-12 lg:pb-0 space-y-12 mt-12 lg:mt-0">

          {/* Detailed Sentinel Widget - Floating */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="group relative overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-950/40 p-6 backdrop-blur-md transition-all hover:border-emerald-500/30 hover:bg-zinc-900/60 cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider group-hover:text-emerald-400/80 transition-colors">Active Research</span>
                </div>
                <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-100 transition-colors">Sentinel</h3>
              <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
                eBPF-based Endpoint Detection & Response (EDR) running at Kernel level.
              </p>

              <div className="flex gap-2">
                <span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-zinc-800/30 text-zinc-400 border border-zinc-800/50 group-hover:border-emerald-500/20 group-hover:bg-emerald-500/10 group-hover:text-emerald-300 transition-all">C</span>
                <span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-zinc-800/30 text-zinc-400 border border-zinc-800/50 group-hover:border-emerald-500/20 group-hover:bg-emerald-500/10 group-hover:text-emerald-300 transition-all">eBPF</span>
              </div>
            </div>
          </motion.div>

          {/* Mobile Socials & Stack (Visible Only on Mobile - Reordered per request) */}
          <div className="flex flex-col items-center gap-8 lg:hidden pb-12">
            {/* Social Icons */}
            <div className="flex items-center gap-10">
              <a
                href="https://github.com/ramos-99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-emerald-400 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-emerald-400 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:martimcr@gmail.com"
                className="text-zinc-400 hover:text-emerald-400 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={28} />
              </a>
            </div>

            {/* Tech Stack Marquee */}
            <div className="opacity-60 text-xs font-mono text-emerald-500/60 tracking-widest uppercase">
              C • Linux
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
