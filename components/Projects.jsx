"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

const projects = [
  {
    emoji: "🤖",
    title: "BOTC — AI Crypto Trading Bot",
    description:
      "Advanced AI-powered cryptocurrency trading bot with ML algorithms for market analysis, automated trading, and 24/7 operation.",
    tech: ["Node.js", "AI/ML", "Crypto APIs", "PM2"],
    tags: ["AI/ML", "Node.js", "Crypto", "Trading"],
    links: [{ label: "GitHub", url: "https://github.com/Eslamawd/BOTC" }],
    accent: "indigo",
    challenge:
      "Needed a 24/7 autonomous trading system that could react to market signals faster than manual trading.",
    solution:
      "Built event-driven architecture with Node.js + PM2 for process management, integrated ML pattern recognition on candlestick data via custom algorithms.",
    result:
      "System runs 24/7 with zero downtime; automated decision cycles under 200ms response time.",
  },
  {
    emoji: "🛒",
    title: "Wholesale App — Services Platform",
    description:
      "Full-stack wholesale services platform with modern UI, wallet management, role-based access, and admin dashboard.",
    tech: ["React 19", "TailwindCSS 4", "Radix UI", "Laravel", "Sanctum"],
    tags: ["React 19", "Laravel", "TailwindCSS 4", "Full-Stack"],
    links: [
      {
        label: "Frontend",
        url: "https://github.com/Eslamawd/wholesale-front-react",
      },
      {
        label: "Backend",
        url: "https://github.com/Eslamawd/wholesale-app-backend-laravel",
      },
    ],
    accent: "purple",
    challenge:
      "Multi-role platform (admin, agent, customer) required secure wallet transactions with real-time balance consistency.",
    solution:
      "Implemented Laravel Sanctum for stateless API auth + role-based middleware, used database transactions to guarantee wallet atomicity, React Query for live balance sync.",
    result:
      "Zero transaction inconsistencies across 3 user roles; API response time under 300ms for all wallet operations.",
  },
  {
    emoji: "🍕",
    title: "PizzaGyro — Restaurant POS",
    description:
      "Complete restaurant POS system with Clover payment integration, menu management, and order tracking.",
    tech: ["Next.js", "TailwindCSS", "Laravel", "Clover POS API"],
    tags: ["Next.js", "Laravel", "Clover POS", "Full-Stack"],
    links: [
      { label: "Frontend", url: "https://github.com/Eslamawd/pizzagyro" },
      { label: "Backend", url: "https://github.com/Eslamawd/apipizza" },
    ],
    accent: "orange",
    challenge:
      "Integrating Clover POS hardware API with a custom Next.js frontend while keeping order state in sync in real time.",
    solution:
      "Built a Laravel webhook layer that bridges Clover events to the frontend via polling; implemented optimistic UI updates in Next.js.",
    result:
      "Reduced order processing time by ~35% compared to the previous manual system; full menu CRUD with live sync.",
  },
  {
    emoji: "📱",
    title: "QREGY — QR Restaurant Management",
    description:
      "QR code-based restaurant management system for digital menus and online ordering.",
    tech: ["React", "Laravel", "QR Code", "REST API"],
    tags: ["React", "Laravel", "QR Code", "Full-Stack"],
    links: [
      { label: "Frontend", url: "https://github.com/Eslamawd/QREGY" },
      { label: "Backend", url: "https://github.com/Eslamawd/QREGY_BACK" },
    ],
    accent: "emerald",
    challenge:
      "Customers needed to browse menus and place orders from their phones with zero app installation.",
    solution:
      "Generated dynamic QR codes per table using Laravel + a React PWA frontend with offline-capable service worker.",
    result:
      "Fully app-free ordering flow; menu updates reflect instantly across all active QR sessions.",
  },
  {
    emoji: "📊",
    title: "Taqryr UI — Reporting Dashboard",
    description:
      "Modern reporting and analytics dashboard with data visualization and RTL support.",
    tech: ["Next.js", "TailwindCSS", "Charts"],
    tags: ["Next.js", "Dashboard", "Analytics", "RTL"],
    links: [{ label: "GitHub", url: "https://github.com/Eslamawd/taqryr-ui" }],
    accent: "cyan",
    challenge:
      "Arabic-first reporting dashboard needed full RTL layout support with complex data visualizations.",
    solution:
      "Built RTL-first layout with TailwindCSS directionality utilities + integrated Chart.js with custom RTL axis configs.",
    result:
      "100% RTL-compatible dashboard with responsive charts; supports both LTR and RTL locales dynamically.",
  },
  {
    emoji: "📈",
    title: "bootTrade — Crypto Trading Bot",
    description:
      "Automated cryptocurrency trading bot with candlestick pattern analysis and technical indicators.",
    tech: ["Node.js", "JavaScript", "Crypto APIs"],
    tags: ["Node.js", "Crypto", "Trading", "Automation"],
    links: [{ label: "GitHub", url: "https://github.com/Eslamawd/bootTrade" }],
    accent: "yellow",
    challenge:
      "Identify high-probability trade setups automatically using candlestick pattern analysis.",
    solution:
      "Implemented technical indicator calculations (RSI, MACD, Bollinger Bands) in pure JavaScript with configurable signal thresholds.",
    result:
      "Backtested win-rate of ~62% on historical BTC/USDT data; fully configurable strategy parameters.",
  },
];

const accentMap = {
  indigo: {
    border: "border-indigo-500/30 hover:border-indigo-500/60",
    tag: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
    glow: "hover:shadow-indigo-500/10",
    btn: "bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  },
  purple: {
    border: "border-purple-500/30 hover:border-purple-500/60",
    tag: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
    glow: "hover:shadow-purple-500/10",
    btn: "bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
  orange: {
    border: "border-orange-500/30 hover:border-orange-500/60",
    tag: "bg-orange-500/10 text-orange-300 border border-orange-500/20",
    glow: "hover:shadow-orange-500/10",
    btn: "bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
  emerald: {
    border: "border-emerald-500/30 hover:border-emerald-500/60",
    tag: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
    glow: "hover:shadow-emerald-500/10",
    btn: "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
  cyan: {
    border: "border-cyan-500/30 hover:border-cyan-500/60",
    tag: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
    glow: "hover:shadow-cyan-500/10",
    btn: "bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  },
  yellow: {
    border: "border-yellow-500/30 hover:border-yellow-500/60",
    tag: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
    glow: "hover:shadow-yellow-500/10",
    btn: "bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  const t = useTranslations("projects");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#0d0d1a]"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm tracking-widest uppercase">
            {t("sectionLabel")}
          </span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black text-white">
            {t("title")} <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-slate-400 max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const accent = accentMap[project.accent];
            return (
              <motion.div
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.1 }}
                className={`glass-card rounded-2xl border ${accent.border} ${accent.glow} flex flex-col p-6 hover:scale-[1.02] hover:shadow-xl transition-all duration-300`}
              >
                {/* Emoji & title */}
                <div className="mb-4">
                  <span className="text-3xl">{project.emoji}</span>
                  <h3 className="mt-2 text-lg font-bold text-white leading-snug">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Case Study */}
                <div className={`mb-4 rounded-xl border p-3 space-y-1.5 bg-white/5 ${accent.border}`}>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <span className="font-semibold text-red-400">🔴 {t("challenge")}:</span>{" "}
                    {project.challenge}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <span className="font-semibold text-green-400">🟢 {t("solution")}:</span>{" "}
                    {project.solution}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <span className="font-semibold text-yellow-400">🏆 {t("result")}:</span>{" "}
                    {project.result}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold ${accent.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="text-xs text-slate-500 mb-5">
                  <span className="font-medium text-slate-400">Stack: </span>
                  {project.tech.join(" · ")}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${accent.btn} transition-all duration-200 hover:scale-105`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      {link.label}
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View all */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Eslamawd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-white/5 transition-all duration-200 text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            {t("viewAll")}
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
