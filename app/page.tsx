import { TerminalHeader } from "@/components/TerminalHeader";
import { TerminalStatusBar } from "@/components/TerminalStatusBar";
import KernelVisualizer from "@/components/KernelVisualizer";

export default function Home() {
  return (
    <div className="relative flex h-screen w-screen flex-col overflow-hidden bg-[#050505]">
      {/* Background Visualizer */}
      <KernelVisualizer />

      {/* Main Grid Layout */}
      <div className="relative z-10 flex h-full flex-col">
        <TerminalHeader />

        {/* Content Area */}
        <main className="flex-1 overflow-hidden p-6 relative">
          <div className="h-full w-full max-w-4xl mx-auto flex flex-col justify-center">

            {/* Terminal Prompt Intro */}
            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-3 text-lg sm:text-xl text-[#e5e5e5]">
                <span className="text-green-500 font-bold">➜</span>
                <span className="text-blue-500 font-bold">~</span>
                <span className="text-[#888]">whoami</span>
              </div>
              <div className="pl-8 space-y-2 text-[#ccc]">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-2">
                  Martim CR
                </h1>
                <p className="text-xl sm:text-2xl text-[#888]">
                  Kernel Engineer <span className="text-[#444]">|</span> Security Researcher
                </p>
                <div className="flex gap-4 mt-6 text-sm text-[#666]">
                  <span>./eBPF_instrumentation</span>
                  <span>./linux_kernel</span>
                  <span>./rust_security</span>
                </div>
              </div>
            </div>

            {/* Placeholder for Sections (About, Projects, Contact) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-8 opacity-50 hover:opacity-100 transition-opacity duration-300">
              <div className="border border-[#222] p-4 bg-[#0a0a0a]/50 backdrop-blur-sm rounded hover:border-[#444] cursor-pointer group">
                <div className="text-sm text-[#444] mb-2 group-hover:text-green-500">01</div>
                <div className="font-bold">ABOUT</div>
              </div>
              <div className="border border-[#222] p-4 bg-[#0a0a0a]/50 backdrop-blur-sm rounded hover:border-[#444] cursor-pointer group">
                <div className="text-sm text-[#444] mb-2 group-hover:text-blue-500">02</div>
                <div className="font-bold">PROJECTS</div>
              </div>
              <div className="border border-[#222] p-4 bg-[#0a0a0a]/50 backdrop-blur-sm rounded hover:border-[#444] cursor-pointer group">
                <div className="text-sm text-[#444] mb-2 group-hover:text-yellow-500">03</div>
                <div className="font-bold">CONTACT</div>
              </div>
            </div>

          </div>
        </main>

        <TerminalStatusBar />
      </div>
    </div>
  );
}
