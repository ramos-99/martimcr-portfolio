# Martim CR - Kernel & Security Engineer

![Next.js](https://img.shields.io/badge/Next.js_15-black?style=flat&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=flat&logo=cloudflare&logoColor=white)
![eBPF](https://img.shields.io/badge/eBPF-orange?style=flat)
![C](https://img.shields.io/badge/C-00599C?style=flat&logo=c&logoColor=white)


## Architecture

This portfolio operates on a **Zero Attack Surface** model. By leveraging Next.js `output: 'export'`, the application is built as a purely static site (HTML/CSS/JS) and deployed to Cloudflare Pages. This eliminates server-side runtime vulnerabilities, reduces latency to near-zero via edge caching, and ensures absolute immutable deployments.

## Project Highlight: Sentinel EDR

**Sentinel** is a custom Endpoint Detection and Response system leveraging eBPF for kernel-level observability. It provides real-time monitoring of syscalls, network traffic, and process execution without the performance overhead of traditional hooking mechanisms.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Font**: Geist Mono
- **Deployment**: Cloudflare Pages (Static Export)

## Run Locally

Clone the repository and install dependencies.

```bash
git clone https://github.com/martimcr/martimcr-portfolio.git
cd martimcr-portfolio
npm install
```

Start the development server.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Development Philosophy

This frontend serves as a minimal, high-performance interface for my work. Built using AI-Accelerated Development (Google Antigravity) to strictly adhere to the Pareto Principle (80/20): minimizing time on UI boilerplate to maximize focus on Kernel research, eBPF instrumentation, and Low-Level Security.
