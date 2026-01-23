"use client";

import KernelVisualizer from "@/components/KernelVisualizer";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-screen flex-col overflow-hidden bg-[#050505] selection:bg-zinc-800 selection:text-white">
      {/* Background Visualizer */}
      <KernelVisualizer />

      {/* Main Layout */}
      <div className="relative z-10 flex h-full flex-grow flex-col lg:flex-row max-w-7xl mx-auto w-full px-6 lg:px-12 py-12 lg:py-0 pointer-events-none">

        {/* Left Column (Identity) - 40% on Desktop - MAIN FOCUS */}
        <div className="flex flex-col justify-center lg:w-[40%] lg:h-screen space-y-8 pt-12 lg:pt-0 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white font-sans">
                Martim Ramos
              </h1>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl sm:text-2xl text-zinc-300 font-mono tracking-tight">
                  Computer Engineering Student
                </h2>
                <span className="text-zinc-500 font-mono text-sm">
                  @ Instituto Superior Técnico
                </span>
              </div>
            </div>

            <p className="text-zinc-400 max-w-md text-lg leading-relaxed font-light">
              Computer Engineering student at Técnico (IST). Focused on mastering <span className="text-zinc-200 font-medium">low-level system architecture</span>, <span className="text-zinc-200 font-medium">Linux Kernel internals</span>, and <span className="text-zinc-200 font-medium">Network Security</span>.
            </p>

            {/* Direct Access Links - Scaled Up */}
            <div className="flex items-center gap-8 pt-6">
              <a
                href="https://github.com/martimcr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:hello@martimcr.com"
                className="text-zinc-500 hover:text-white transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={28} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Visualizer & Widget) - 60% on Desktop */}
        <div className="relative flex flex-col justify-end lg:justify-center lg:items-end lg:w-[60%] lg:h-screen pb-12 lg:pb-0 pointer-events-none">

          {/* Detailed Sentinel Widget - Floating */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="pointer-events-auto w-full max-w-md"
          >
            <div className="group relative overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-950/40 p-6 backdrop-blur-md transition-all hover:border-zinc-700/80 hover:bg-zinc-900/60 cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Active Research</span>
                </div>
                <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-lg font-bold text-white mb-1">Sentinel</h3>
              <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
                eBPF-based Endpoint Detection & Response (EDR) running at Kernel level.
              </p>

              <div className="flex gap-2">
                <span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-zinc-800/30 text-zinc-400 border border-zinc-800/50">C</span>
                <span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-zinc-800/30 text-zinc-400 border border-zinc-800/50">eBPF</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
