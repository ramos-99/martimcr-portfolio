import { Wifi, Activity, Cpu, Battery } from "lucide-react";

export function TerminalStatusBar() {
    return (
        <footer className="flex h-8 w-full shrink-0 items-center justify-between border-t border-[#333] bg-[#0a0a0a]/90 px-4 text-[10px] text-[#666] backdrop-blur-sm z-50 relative uppercase tracking-wider">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span>Connected: 127.0.0.1</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Activity size={12} />
                    <span>Syscall Trace: Active</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                    <Cpu size={12} />
                    <span>Load: 0.14 0.08 0.01</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Wifi size={12} />
                    <span>ETH0: UP</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-[#888]">
                    <span>UTF-8</span>
                    <span>Dos/Unix</span>
                </div>
            </div>
        </footer>
    );
}
