import { Terminal, Shield } from "lucide-react";

export function TerminalHeader() {
    return (
        <header className="flex h-12 w-full shrink-0 items-center justify-between border-b border-[#333] bg-[#0a0a0a]/90 px-4 backdrop-blur-sm z-50 relative">
            <div className="flex items-center gap-2">
                <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="ml-4 flex items-center gap-2 text-sm text-[#888] font-mono">
                    <Terminal size={14} />
                    <span>martimcr-portfolio — -zsh</span>
                </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-[#444]">
                <div className="flex items-center gap-1.5 px-2 py-1 bg-[#111] rounded border border-[#222]">
                    <Shield size={12} className="text-green-500" />
                    <span className="text-[#666]">SECURE_ENCLAVE</span>
                </div>
            </div>
        </header>
    );
}
