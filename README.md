# Martim Ramos - High-End Engineering Portfolio

![Next.js](https://img.shields.io/badge/Next.js_15-black?style=flat&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=flat&logo=cloudflare&logoColor=white)
![eBPF](https://img.shields.io/badge/eBPF-orange?style=flat)

> **"Identity First" Design**. A high-performance, security-focused portfolio exploring the intersection of Linux Kernel, eBPF, and Low-Level Security.

## Design Philosophy: "Cyberpunk Corporate"

This portfolio pivots from a standard minimal site to a **High-End Engineering Aesthetic**, featuring:

- **Emerald Theme**: Deep `neutral-950` backgrounds with `emerald-500` strategic accents.
- **Carbon Texture**: Custom CSS carbon-fiber weave patterns for depth.
- **Space Grotesk Typography**: Technical, squared headings for a distinct engineering brand.
- **Kernel Visualizer**: A custom HTML5 Canvas background simulating node connections and system activity.

## Project Highlight: Sentinel EDR

**Sentinel** is a custom Endpoint Detection and Response system leveraging eBPF for kernel-level observability. The portfolio features a dedicated "Active Research" widget for this project.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 (Alpha)
- **Font**: Space Grotesk (Identity) + Geist Mono (Data)
- **Animation**: Framer Motion (TYPEWRITER effect, entrances)
- **Deployment**: Cloudflare Pages (Static Export)

## Mobile Optimization

Everything is fully responsive:
- **Scroll Enabled**: `overflow-y-auto` on mobile (fixed on desktop).
- **Layout Order**: Identity → Project → Socials.
- **Accessibility**: Score 100 with large touch targets and proper spacing.
- **Dynamic Favicon**: Auto-generated 32x32 Emerald 'M' icon via `next/og`.

## Run Locally

Clone the repository and install dependencies.

```bash
git clone https://github.com/ramos-99/martimcr-portfolio.git
cd martimcr-portfolio
npm install
```

Start the development server.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.
