"use client";

import KernelVisualizer from "@/components/KernelVisualizer";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  name: string;
  href: string;
  stack: string[];
  body: React.ReactNode;
  demo?: { src: string; alt: string; width: number; height: number };
};

const projects: Project[] = [
  {
    name: "truetop",
    href: "https://github.com/ramos-99/truetop",
    stack: ["Rust", "eBPF", "Aya"],
    body: "eBPF-based system monitor in Rust. Kernel hooks only, no procfs polling.",
    demo: {
      src: "/demo.gif",
      alt: "truetop running in a terminal",
      width: 1280,
      height: 760,
    },
  },
  {
    name: "Workflow Automation",
    href: "https://github.com/ramos-99",
    stack: ["n8n", "Outlook Manifest", "MS Graph API", "Docker", "Claude API"],
    body: (
      <>
        Custom Outlook add-in with LLM-based email triage and Dropbox archiving,
        architected at{" "}
        <a
          href="https://rqsystems.pt"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 text-paper underline decoration-rule underline-offset-4 transition-colors hover:text-jade hover:decoration-jade"
        >
          RQ Systems
        </a>
        , the automation studio I co-founded.
      </>
    ),
  },
  {
    name: "aya-rs",
    href: "https://github.com/aya-rs/aya",
    stack: ["Rust", "eBPF", "Kernel"],
    body: "Working on kernel ABI compatibility and TC classifier support for this Rust eBPF framework.",
  },
];

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
    <div className="relative flex h-[100dvh] w-full flex-col overflow-y-auto bg-ink selection:bg-jade/25 selection:text-paper">
      {/* Carbon Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-carbon mix-blend-overlay"></div>

      {/* Radial Gradient for Depth */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-jade-deep/25 via-ink/0 to-ink/80 pointer-events-none"></div>

      {/* Background Visualizer */}
      <KernelVisualizer />

      {/* Main Layout */}
      <div className="relative z-10 flex h-full flex-grow flex-col lg:flex-row max-w-7xl mx-auto w-full px-6 lg:px-12 py-12 lg:py-0 pointer-events-auto">

        {/* Left Column (Identity) - 40% on Desktop */}
        <div className="flex flex-col justify-center lg:w-[40%] lg:h-screen space-y-8 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Identity Group */}
            <div className="space-y-6">

              {/* Avatar + Typewriter Name */}
              <div className="flex flex-col items-center sm:items-start gap-6 text-center sm:text-left">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-rule">
                  <Image
                    src="/avatar.jpg"
                    alt="Martim C. Ramos"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <h1 className="font-mono font-medium text-4xl sm:text-5xl tracking-tight text-paper min-h-[1.1em]">
                  {typedName}
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="ml-1 inline-block w-2 bg-jade h-[0.75em] align-middle"
                  />
                </h1>
              </div>

              {/* Subtitle */}
              <h2 className="font-mono text-base sm:text-lg text-mute tracking-tight text-center sm:text-left">
                MSc Computer Science &amp; Engineering
              </h2>

              {/* Affiliation + Location */}
              <p className="font-mono text-sm text-faint text-center sm:text-left">Técnico (IST) · Lisbon, Portugal</p>
            </div>

            {/* Bio */}
            <p className="text-mute max-w-lg text-lg sm:text-xl leading-relaxed text-center sm:text-left mx-auto sm:mx-0">
              My technical interests span <span className="text-paper">Linux internals</span>, <span className="text-paper">systems programming</span>, and <span className="text-paper">automation</span>. I am particularly drawn to the intersection of low-level kernel instrumentation and <span className="text-paper">AI</span>, specifically how <span className="text-paper">eBPF</span> can inform and optimise ML inference at the system level.
            </p>

            {/* Socials (Desktop Only) */}
            <div className="hidden lg:flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-10">
                <a
                  href="https://github.com/ramos-99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mute transition-colors hover:text-jade"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/martim-c-ramos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mute transition-colors hover:text-jade"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="mailto:m@martimcr.com"
                  className="text-mute transition-colors hover:text-jade"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
              </div>
              <div className="flex items-center gap-5">
                <a
                  href="mailto:m@martimcr.com"
                  className="font-mono text-sm text-faint transition-colors hover:text-jade"
                >
                  m@martimcr.com
                </a>
                <a
                  href="/Martim_Ramos_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-rule px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-mute transition-colors hover:border-jade hover:text-jade"
                >
                  <FileText size={13} />
                  Resume
                </a>
              </div>
            </div>

            {/* Tech Stack (Desktop) */}
            <div className="hidden lg:block pt-8 lg:pt-16 text-xs font-mono text-faint tracking-widest uppercase">
              C · Rust · eBPF · Linux
            </div>

          </motion.div>
        </div>

        {/* Right Column (Work) - 60% on Desktop */}
        <div className="relative flex flex-col justify-center lg:items-end lg:w-[60%] lg:h-screen pb-24 lg:pb-0 mt-16 lg:mt-0 space-y-12">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="w-full max-w-xl mx-auto lg:mx-0"
          >
            <ol>
              {projects.map((p) => (
                <li
                  key={p.name}
                  className="group relative -mx-5 rounded border-t border-rule px-5 py-7 transition-colors first:border-t-0 hover:bg-paper/[0.025]"
                >
                  <h3 className="font-mono font-medium text-xl leading-tight text-paper transition-colors group-hover:text-jade">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="after:absolute after:inset-0 after:content-['']"
                    >
                      {p.name}
                    </a>
                    <span
                      aria-hidden
                      className="ml-1.5 text-lg text-jade opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      ↗
                    </span>
                  </h3>

                  <p className="mt-2 font-mono text-xs text-faint">
                    {p.stack.join(" · ")}
                  </p>

                  <p className="mt-3.5 text-[15px] leading-relaxed text-mute">
                    {p.body}
                  </p>

                  {p.demo && (
                    <div className="mt-5 max-w-md overflow-hidden rounded-md border border-rule">
                      <Image
                        src={p.demo.src}
                        alt={p.demo.alt}
                        width={p.demo.width}
                        height={p.demo.height}
                        unoptimized
                        className="w-full"
                      />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Socials & Stack (Mobile Only) */}
          <div className="flex flex-col items-center gap-8 lg:hidden">
            <div className="flex items-center gap-10">
              <a
                href="https://github.com/ramos-99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mute transition-colors hover:text-jade"
                aria-label="GitHub"
              >
                <Github size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/martim-c-ramos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mute transition-colors hover:text-jade"
                aria-label="LinkedIn"
              >
                <Linkedin size={26} />
              </a>
              <a
                href="mailto:m@martimcr.com"
                className="text-mute transition-colors hover:text-jade"
                aria-label="Email"
              >
                <Mail size={26} />
              </a>
            </div>

            <div className="flex flex-col items-center gap-5">
              <a
                href="mailto:m@martimcr.com"
                className="font-mono text-sm text-faint transition-colors hover:text-jade"
              >
                m@martimcr.com
              </a>
              <a
                href="/Martim_Ramos_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-rule px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-mute transition-colors hover:border-jade hover:text-jade"
              >
                <FileText size={13} />
                Resume
              </a>
            </div>

            <div className="text-xs font-mono text-faint tracking-widest uppercase">
              C · Rust · eBPF · Linux
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
