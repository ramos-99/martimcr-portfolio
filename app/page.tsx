import KernelVisualizer from "@/components/KernelVisualizer";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex h-screen w-screen flex-col overflow-hidden bg-[#050505]">
      {/* Background Visualizer - kept as requested (refined texture) */}
      <KernelVisualizer />

      {/* Main Grid Layout */}
      <div className="relative z-10 flex h-full flex-col">

        {/* Content Area */}
        <main className="flex-1 flex items-center justify-center overflow-hidden p-6 relative">
          <div className="w-full max-w-4xl flex flex-col items-center justify-center text-center">

            {/* Hero Section */}
            <div className="space-y-8 mb-16">

              {/* Name & Title */}
              <div className="space-y-4">
                <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-white font-sans">
                  Martim CR
                </h1>
                <p className="text-xl sm:text-2xl text-zinc-400 font-light font-mono">
                  Kernel Engineer <span className="text-zinc-700 mx-2">|</span> Security Researcher
                </p>
              </div>

              {/* Skills / Tags - Minimal Pills */}
              <div className="flex justify-center gap-3">
                <span className="tag-pill">eBPF Instrumentation</span>
                <span className="tag-pill">Linux Kernel</span>
                <span className="tag-pill">Low-Level Security</span>
              </div>
            </div>

            {/* Sections (About, Projects, Contact) - Refined Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl opacity-80">
              <div className="border border-zinc-900 p-6 bg-zinc-950/30 backdrop-blur-sm rounded-lg hover:border-zinc-800 cursor-pointer group transition-all">
                <div className="text-xs text-zinc-500 mb-3 font-mono tracking-widest uppercase">Explore</div>
                <div className="font-semibold text-zinc-200">About Me</div>
              </div>
              <div className="border border-zinc-900 p-6 bg-zinc-950/30 backdrop-blur-sm rounded-lg hover:border-zinc-800 cursor-pointer group transition-all">
                <div className="text-xs text-zinc-500 mb-3 font-mono tracking-widest uppercase">Work</div>
                <div className="font-semibold text-zinc-200">Projects</div>
              </div>
              <div className="border border-zinc-900 p-6 bg-zinc-950/30 backdrop-blur-sm rounded-lg hover:border-zinc-800 cursor-pointer group transition-all">
                <div className="text-xs text-zinc-500 mb-3 font-mono tracking-widest uppercase">Connect</div>
                <div className="font-semibold text-zinc-200">Contact</div>
              </div>
            </div>

          </div>
        </main>

        {/* Professional Footer */}
        <footer className="flex h-16 w-full shrink-0 items-center justify-center gap-8 text-zinc-500 z-50">
          <a href="https://github.com/martimcr" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:hello@martimcr.com" className="hover:text-zinc-300 transition-colors">
            <Mail size={20} />
          </a>
        </footer>

      </div>
    </div>
  );
}
